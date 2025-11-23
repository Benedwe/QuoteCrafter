QuoteCrafter - Aptoide Connect Deployment Guide
==============================================

This guide explains how to prepare and deploy the QuoteCrafter app to Aptoide Connect.

Prerequisites:
--------------
1. Node.js and npm installed
2. Expo CLI installed (npm install -g expo-cli)
3. EAS CLI installed (npm install -g eas-cli)

Steps to Build and Deploy:
--------------------------

1. Install Dependencies:
   Run `npm install` in the project root directory

2. Configure EAS Build:
   The project already includes an eas.json configuration file for building Android APKs

3. Build the Android APK:
   Run `eas build -p android --profile production`
   
   Or for a development build:
   Run `eas build -p android --profile development`

4. Download the Generated APK:
   After the build completes, download the APK file from the Expo/EAS dashboard

5. Prepare for Aptoide Connect Submission:
   - App Name: QuoteCrafter
   - Version: 1.0.0
   - Package Name: com.quotecrafter.app
   - Icon: assets/icon.png
   - Description: A minimal React Native app that displays random motivational quotes with favorites functionality and theme toggle.

6. Submit to Aptoide Connect:
   - Visit connect.aptoide.com
   - Create an account or log in
   - Click "Add App"
   - Upload the generated APK file
   - Fill in app details
   - Submit for review

Troubleshooting:
----------------
If you encounter environment issues:
1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules and package-lock.json
3. Reinstall dependencies: `npm install`
4. Ensure your PATH environment variable is correctly set

App Features:
-------------
- Random motivational quotes display
- Custom quote submission
- Favorites management with AsyncStorage
- Dark/light theme toggle

Technical Details:
------------------
- Built with React Native and Expo
- Uses AsyncStorage for data persistence
- Supports both Android and iOS (though only Android APK is needed for Aptoide)
- Minimum Android version: 5.0 (API level 21)