import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start';
import Chat from './components/Chat';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// creates a stack navigator
const Stack = createNativeStackNavigator();

// prevents warning message from showing
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from']);

const App = () => {
  // configures firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyDx0uDGBSrjkc5flpyU-KNyV-cEBA2azKk',
    authDomain: 'chatapp-74d33.firebaseapp.com',
    projectId: 'chatapp-74d33',
    storageBucket: 'chatapp-74d33.appspot.com',
    messagingSenderId: '62702612519',
    appId: '1:62702612519:web:4e377d28b2637118391e02',
  };
  // initializes firebase
  const app = initializeApp(firebaseConfig);
  // gets firestore instance
  const db = getFirestore(app);

  return (
    // wraps the stack navigator with the NavigationContainer, navigates between screens
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {/* passes database prop to Chat */}
          {(props) => <Chat {...props} db={db} />}
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
