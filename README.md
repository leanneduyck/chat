Overview:
This is a React Native chat app that allows users to enter their name and choose a background color for the chat screen before joining. It provides a platform for users to exchange messages, send images, and share location data. The app ensures that data is accessible both online and offline by leveraging Firebase Firestore for data storage and React AsyncStorage for local caching. The app is designed to be user-friendly and accessible, including compatibility with screen readers.
The UI of this app was completely specified by the provided wireframe.

Key Features:

1. A page where users can enter their name and choose a background color for the chat screen before joining the chat.
2. A page displaying the conversation, as well as an input field and submit button.
3. The chat must provide users with two additional communication features: sending images and location data.
4. Data gets stored online and offline.

Website:

User Stories:

1. As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.
2. As a user, I want to be able to send messages to my friends and family members to exchange the latest news.
3. As a user, I want to send images to my friends to show them what I'm currently doing.
4. As a user, I want to share my location with my friends and family to show them where I am.
5. As a user, I want to be able to read my messages offline so I can reread conversations at any time.
6. As a user with visual impairment, I want to use a chat app taht is compatible with a screen reader so that I can engage with a chat interface.

Technologies Used:

1. React Native: For building the mobile application.
2. Expo: For development, build, and deployment processes.
3. React Navigation: For managing navigation between screens.
4. Firebase: For backend services including Firestore for data storage and Firebase Authentication for user authentication.
5. React Native Gifted Chat: For providing a chat interface.
6. React AsyncStorage: For local storage of chat data.
7. @react-native-community/netinfo: For detecting network connection status.
8. dotenv: For managing environment variables securely.
9. Expo Image Picker: For selecting images from the device library or capturing new images using the device camera.
10. Expo Location: For accessing device location data.
11. Firebase Storage: For storing and retrieving image files.
12. React Native Maps: For rendering maps and displaying user locations.
13. Expo Media Library: For managing and interacting with the device's media library.
14. Babel: For transforming and compiling modern JavaScript syntax.

Setup Instructions:

1. Prepare Node.js
   a. Install Node by running: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   b. Load ‘nvm’ by running: export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   c. Verify installation by running: nvm –version
   d. Install compatible version for use with Expo by running:
   i. nvm install 16.19.0
   ii. nvm use 16.19.0
   iii. nvm alias default 16.19.0

2. Prepare Expo
   a. Install Expo CLI by running: npm install -g expo-cli
   b. Download “Expo Go App” on smartphone
   c. Create online Expo account
   d. To use Expo CLI, login via the terminal by running: expo login
   i. To check current login, run: expo whoami

3. Create Project
   a. In terminal, navigate to folder of dev projects and run: npx create-expo-app {title of project} –-template
   i. Choose blank template when prompted
   b. After initialization complete, navigate to project by running: cd {title of project}
   c. Start Metro Bundler by running: npm start (or expo start)
   i. Connect with Expo Go App either via terminal or via phone
   ii. Metro Bundler automatically updates Expo Go App as save files in VSC

4. Install React-Navigation
   a. Install by running: npm install --save @react-navigation/native @react-navigation/native-stack
   b. Install necessary dependencies by running: expo install react-native-screens react-native-safe-area-context

5. Android Studio (emulator)
   a. Download and install Android Studio
   i. If using Mac, move to Apps folder
   b. Set up Android Emulator
   i. Follow install instructions EXCEPT "Select Components to Install:" select "Android Virtual Device"
   c. Configure Android Studio
   i. Project Option - More Actions - select "SDK Manager"
   A. Follow prompts
   ii. Connecting SDK to the terminal
   A. Run: nano ~/.zshrc
   B. Enter: export ANDROID_SDK=/Users/myuser/Library/Android/sdk
   export PATH=$ANDROID_SDK/platform-tools:$PATH
   (be sure to change "myuser" to your path)
   C. Press 'CTRL + O' to write the changes; 'Enter' to confirm the file name; 'CTRL + X' to exit nano
   D. Apply changes by running: source ~/.zshrc
   E. Verify it was configured by running: echo $ANDROID_SDK
   F. To check path, run: echo $PATH
   d. Setup Virtual Device Manager
   i. Project Option - More Actions - select "Virtual Device Manager"
   A. Choose any with a Google Play icon
   B. Make sure system image uses same API number as in setup (should be recommended)
   ii. To get Expo Go on virtual device, in Metro Bundler terminal, run: a
   ii. Xcode for MacOS
   A. Open by running: open -a Simulator
   B. In Metro Bundler terminal, run: i
   iii. Only have one simulator open at a time.

6. Gifted Chat
   a. In project directory terminal, run: npm install react-native-gifted-chat --save

7. Firestore (via Firebase)
   a. Create a new project in Google Firebase
   i. Disable Google Analytics
   ii. Build - Firestore Database
   iii. Start in Production Mode
   iv. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;"
   v. Enable the anonymous sign-in method (Build - Authentication - Get Started - SignInMethod - Anonymous)
   vi. No need to actually create a collection
   b. Install Firestore by running: npm install firebase@10.3.1 --save
   c. Configure Firestore database to Chat
   i. Project Settings - "</>" (Firestore for Web) - Register 11. Copy the const firebaseConifg... into App.js
   d. Make sure to add firebase config code into .env file
   e. Set up storage (Build - Storage - Get Started - Next - Done)
   i. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;" - Publish

8. Local Storage (via React AsyncStorage)
   a. Run: expo install @react-native-async-storage/async-storage
   b. Then code accordingly

9. Detect Network Connection (via NetInfo)
   a. Run: expo install @react-native-community/netinfo
   b. Then code accordingly

10. Testing in Offline Mode via Emulator
    a. Run: expo start --offline

11. Media Library
    a. Run: expo install expo-image-picker
    b. To be able to save images taken in app, run: expo install expo-media-library
    c. Then code accordingly

12. Geolocation
    a. Run: expo install expo-location
    b. Run: expo install react-native-maps

13. Clearing Cache
    a. To delete .expo directory, run: rm -rf .expo
    b. To clear npm cache, run: npm cache clean --force
    c. To clear Metro bundler cache, run: expo start -c
    d. To delete node_modules, run: rm -rf node_modules
    i. Then, reinstall: npm install

14. Expo Publish
    a. Run: expo publish

Github:
To create new repo:

1. From project directory in terminal run: git init
2. Run git commit -m "first commit"
3. Run git branch -M main
4. From GH page, go through process of adding new repo, then use https it gives and run: git remote add origin https://github.com/leanneduyck/chat.git
5. git push -u origin main

To push:

6. Run: git add .
7. Run: git commit -m "Your commit message"
8. Run: git push
