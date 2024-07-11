import { useEffect } from 'react';
import { StyleSheet, LogBox, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start';
import Chat from './components/Chat';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { FIREBASE_CONFIG } from '@env';

// creates a stack navigator
const Stack = createNativeStackNavigator();

// prevents warning message from showing
LogBox.ignoreLogs(['AsyncStorage has been extracted from']);

const App = () => {
  // gets network information
  const connectionStatus = useNetInfo();
  // initializes firebase from .env config file
  const app = initializeApp(JSON.parse(FIREBASE_CONFIG));
  // gets firestore instance
  const db = getFirestore(app);
  // gets storage instance
  const storage = getStorage(app);
  // checks if internet connection; disables/enables firestore network accordingly
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('you are offline...');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    // wraps the stack navigator with the NavigationContainer, navigates between screens
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {/* passes database prop to Chat, checks internet connection */}
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
