import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

// Start component
const Start = ({ navigation }) => {
  // useState hook to create a state variable called name and color
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  return (
    <ImageBackground
      source={require('../assets/StartBackground.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* app title */}
        <Text style={styles.title}>Chat App!</Text>

        {/* container for input section */}
        <View style={styles.inputContainer}>
          {/* text input for user's name */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="your username..."
          />
          {/* title for user choosing color of chat screen */}
          <Text style={styles.colorInputTitle}>
            choose a background color when chatting...
          </Text>
          {/* color options for chat screen */}
          <View style={styles.colorInputContainer}>
            <TouchableOpacity
              style={[
                styles.colorInput,
                { backgroundColor: '#090C08' },
                color === '#090C08' ? styles.selectedColor : null,
              ]}
              onPress={() => setColor('#090C08')}
            />
            <TouchableOpacity
              style={[styles.colorInput, { backgroundColor: '#474056' }]}
              onPress={() => setColor('#474056')}
            />
            <TouchableOpacity
              style={[styles.colorInput, { backgroundColor: '#8A95A5' }]}
              onPress={() => setColor('#8A95A5')}
            />
            <TouchableOpacity
              style={[styles.colorInput, { backgroundColor: '#B9C6AE' }]}
              onPress={() => setColor('#B9C6AE')}
            />
          </View>
          {/* button leading to chat screen */}
          <TouchableOpacity
            style={styles.button}
            // navigate to ChatScreen and pass the name state variable as a parameter
            onPress={() =>
              navigation.navigate('Chat', { name: name, color: color })
            }
          >
            <Text style={styles.buttonTitle}>start chatting...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 50,
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    width: '88%',
    height: '44%',
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
    padding: 15,
    borderRadius: 10,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 0.5,
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  colorInputTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    marginTop: 25,
    marginBottom: 10,
  },
  colorInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  colorInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 40,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: 'black',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757083',
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.8,
  },
});

export default Start;
