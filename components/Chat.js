import { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Chat component
const Chat = ({ route, navigation, db, isConnected }) => {
  // gets the name parameter from the route object
  const { name, color, userID } = route.params;
  // useState hook to create a state variable called messages
  const [messages, setMessages] = useState([]);

  // calling outside useEffect so can unsubscribe/cleanup before lose reference to it
  let unsubMessages;

  useEffect(() => {
    // sets the title of the chat screen to the user's name
    navigation.setOptions({ title: name });
    // query to get messages from firestore, orders them by createdAt, in descending order
    if (isConnected === true) {
      const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
      // onSnapshot listener to get messages from firestore
      unsubMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        // loops through the documents and adds them to the newMessages array
        docs.forEach((doc) => {
          newMessages.push({
            _id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
        });
        cacheMessages(newMessages);
        setMessages(newMessages);
      });
    } else loadCachedMessages();
    // cleans up the listener
    // code from 5.3, trying below
    //   return () => unsubMessages();
    // }, [db, name, navigation]);
    // cleans up listener, avoids new listeners when connection changes
    return () => {
      if (unsubMessages) unsubMessages();
      unsubMessages = null;
    };
  }, [db, name, navigation, isConnected]);

  // caches messages in AsyncStorage
  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem(
        'cached_messages',
        JSON.stringify(messagesToCache)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSend = (newMessages) => {
    // adds the new message to the messages collection in firestore
    addDoc(collection(db, 'messages'), newMessages[0]);
  };

  // loads cached messages from AsyncStorage
  const loadCachedMessages = async () => {
    const cachedMessages =
      (await AsyncStorage.getItem('cached_messages')) || [];
    setLists(JSON.parse(cachedMessages));
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

  // lets inPutToolbar be disabled when user offline
  const renderInputToolbar = (props) => {
    if (isConnected) {
      return <InputToolbar {...props} />;
    } else {
      return null;
    }
  };

  // renders chat component
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
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
