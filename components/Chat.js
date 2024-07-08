import { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';

// Chat component
const Chat = ({ route, navigation, db }) => {
  // gets the name parameter from the route object
  const { name, color, userID } = route.params;
  // useState hook to create a state variable called messages
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // sets the title of the chat screen to the user's name
    navigation.setOptions({ title: name });
    // query to get messages from firestore, orders them by createdAt, in descending order
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    // onSnapshot listener to get messages from firestore
    const unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      // loops through the documents and adds them to the newMessages array
      docs.forEach((doc) => {
        newMessages.push({
          _id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        });
      });
      setMessages(newMessages);
    });
    // unsubscribes from the listener when the component unmounts
    return () => unsubMessages();
  }, [db, name, navigation]);

  const onSend = (newMessages) => {
    // adds the new message to the messages collection in firestore
    addDoc(collection(db, 'messages'), newMessages[0]);
  };

  // renders the chat bubbles
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000',
          },
          left: {
            backgroundColor: '#FFF',
          },
        }}
      />
    );
  };

  // renders chat component
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={onSend}
        user={{
          _id: userID,
          name: name,
        }}
      />
      {/* fixes keyboard being too large */}
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
