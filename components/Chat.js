import { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

// Chat component
const Chat = ({ route, navigation }) => {
  // gets the name parameter from the route object
  const { name, color } = route.params;
  // useState hook to create a state variable called messages
  const [messages, setMessages] = useState([]);

  // sets header as name the user entered
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  // sets initial messages, includes a system message
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'You have begun chatting in Chat App!',
        createdAt: new Date(),
        system: true,
      },
      {
        _id: 2,
        text: 'Hello, developer!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

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
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
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
