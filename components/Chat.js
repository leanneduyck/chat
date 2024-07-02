import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Chat component
const Chat = ({ route, navigation }) => {
  // gets the name parameter from the route object
  const { name, color } = route.params;

  // sets header as name the user entered, background as color the user chose
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.name}>Hello, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#FFFFFF',
  },
});

export default Chat;
