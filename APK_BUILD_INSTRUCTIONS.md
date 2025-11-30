# APK Build Instructions for QuoteCrafter

## Option 1: Using EAS Build (Recommended)

1. Install EAS CLI globally:
   ```
   npm install -g eas-cli
   ```

2. Log in to your Expo account:
   ```
   eas login
   ```

3. Build the APK:
   ```
   eas build -p android --profile production
   ```

4. Once the build completes, download the APK from the Expo dashboard.

## Option 2: Local Build with Android Studio

1. Eject from Expo to bare workflow:
   ```
   npx expo eject
   ```

2. Install Android Studio and set up the Android SDK.

3. Open the `android` folder in Android Studio.

4. Build the APK:
   - Go to Build → Build Bundle(s) / APK(s) → Build APK

## Option 3: Using React Native CLI

1. Install React Native CLI:
   ```
   npm install -g react-native-cli
   ```

2. Eject from Expo:
   ```
   npx expo eject
   ```

3. Navigate to the android directory:
   ```
   cd android
   ```

4. Build the APK:
   ```
   ./gradlew assembleRelease
   ```

The APK will be located at:
`android/app/build/outputs/apk/release/app-release.apk`

## Troubleshooting

- Make sure you have Java 8+ installed
- Ensure Android SDK is properly configured
- Check that all dependencies in package.json are correctly installed