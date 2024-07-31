Overview:
Current GH Repo Overview: This is a React Native mobile app that allows users to enter their name and choose a background color for the chat screen before joining. It provides a platform for users to exchange messages (React Native Gifted Chat), send images (Expo Media Library), and share location data (React Native Maps). It features a user-friendly interface designed according to wireframes. The app ensures seamless offline and online data access using Firebase Firestore for real-time storage and React AsyncStorage for local caching. ExpoGo is used for development and testing in Android and iOS. 

Key Features:

1. A page where users can enter their name and choose a background color for the chat screen before joining the chat.
2. A page displaying the conversation, as well as an input field and submit button.
3. The chat must provide users with two additional communication features: sending images and location data.
4. Data gets stored online and offline.

Expo Link: https://expo.dev/preview/update?message=readme&updateRuntimeVersion=1.0.0&createdAt=2024-07-14T00%3A52%3A16.822Z&slug=exp&projectId=06dc17ba-4509-4950-90c4-203dcae4ee64&group=a0360ea5-cb19-48a2-9c71-07b2523ac535

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

Prepare Node.js
   1. Install Node by running: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
   2. Load ‘nvm’ by running: export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   3. Verify installation by running: nvm –version
   4. Install compatible version for use with Expo by running:
   5. nvm install 16.19.0
   6. nvm use 16.19.0
   7. nvm alias default 16.19.0

Prepare Expo
   1. Install Expo CLI by running: npm install -g expo-cli
   2. Download “Expo Go App” on smartphone
   3. Create online Expo account
   4. To use Expo CLI, login via the terminal by running: expo login
   5. To check current login, run: expo whoami

Create Project
   1. In terminal, navigate to folder of dev projects and run: npx create-expo-app {title of project} –-template
   2. Choose blank template when prompted
   3. After initialization complete, navigate to project by running: cd {title of project}
   4. Start Metro Bundler by running: npm start (or expo start)
   5. Connect with Expo Go App either via terminal or via phone
   6. Metro Bundler automatically updates Expo Go App as save files in VSC

Install React-Navigation
   1. Install by running: npm install --save @react-navigation/native @react-navigation/native-stack
   2. Install necessary dependencies by running: expo install react-native-screens react-native-safe-area-context

Android Studio (emulator)
   1. Download and install Android Studio
   2. If using Mac, move to Apps folder
   3. Set up Android Emulator
   4. Follow install instructions EXCEPT "Select Components to Install:" select "Android Virtual Device"
   5. Configure Android Studio
   6. Project Option - More Actions - select "SDK Manager"
   7. Follow prompts
   8. Connecting SDK to the terminal
   9. Run: nano ~/.zshrc
   10. Enter: export ANDROID_SDK=/Users/myuser/Library/Android/sdk
   export PATH=$ANDROID_SDK/platform-tools:$PATH
   (be sure to change "myuser" to your path)
   11. Press 'CTRL + O' to write the changes; 'Enter' to confirm the file name; 'CTRL + X' to exit nano
   12. Apply changes by running: source ~/.zshrc
   13. Verify it was configured by running: echo $ANDROID_SDK
   14. To check path, run: echo $PATH
   15. Setup Virtual Device Manager
   16. Project Option - More Actions - select "Virtual Device Manager"
   17. Choose any with a Google Play icon
   18. Make sure system image uses same API number as in setup (should be recommended)
   19. To get Expo Go on virtual device, in Metro Bundler terminal, run: a
   20. Xcode for MacOS
   21. Open by running: open -a Simulator
   22. In Metro Bundler terminal, run: i
   23. Only have one simulator open at a time.

Gifted Chat
   1. In project directory terminal, run: npm install react-native-gifted-chat --save

Firestore (via Firebase)
   1. Create a new project in Google Firebase
   2. Disable Google Analytics
   3. Build - Firestore Database
   4. Start in Production Mode
   5. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;"
   6. Enable the anonymous sign-in method (Build - Authentication - Get Started - SignInMethod - Anonymous)
   7. No need to actually create a collection
   8. Install Firestore by running: npm install firebase@10.3.1 --save
   9. Configure Firestore database to Chat
   10. Project Settings - "</>" (Firestore for Web) - Register 11. Copy the const firebaseConifg... into App.js
   11. Make sure to add firebase config code into .env file
   12. Set up storage (Build - Storage - Get Started - Next - Done)
   13. Rules tab: change "allow read, write: if false;" to "allow read, write: if true;" - Publish

Local Storage (via React AsyncStorage)
   1. Run: expo install @react-native-async-storage/async-storage
   2. Then code accordingly

Detect Network Connection (via NetInfo)
   1. Run: expo install @react-native-community/netinfo
   2. Then code accordingly

Testing in Offline Mode via Emulator
    1. Run: expo start --offline

Media Library
    1. Run: expo install expo-image-picker
    2. To be able to save images taken in app, run: expo install expo-media-library
    3. Then code accordingly

Geolocation
    1. Run: expo install expo-location
    2. Run: expo install react-native-maps

Clearing Cache
    1. To delete .expo directory, run: rm -rf .expo
    2. To clear npm cache, run: npm cache clean --force
    3. To clear Metro bundler cache, run: expo start -c
    4. To delete node_modules, run: rm -rf node_modules
    5. Then, reinstall: npm install

Expo Publish
    1. Run: expo publish

EAS Publishing if Expo CLI deprecated
    1. Run: npm install -g eas-cli
    2. Run: eas login
    3. Run: eas update:configure
    4. To build, run: eas build --platform all
    5. To update, run: eas update

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
