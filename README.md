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
