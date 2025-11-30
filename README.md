# QuoteCrafter

A minimal React Native app that shows random motivational quotes.

## Features

- Display random motivational quotes
- Create and share your own quotes with other users
- Save favorite quotes
- Dark/light theme toggle

## Privacy Policy

Please review our [Privacy Policy](PRIVACY_POLICY.md) for information about how we collect, use, and share your personal information.

## Development

1. Install dependencies

```bash
npm install
```

2. Run in Expo

```bash
npx expo start
```

## Building APK for Aptoide

### Option 1: Using EAS Build (Recommended)

1. Install EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Log in to your Expo account:
```bash
eas login
```

3. Configure your project for building (if not already done):
```bash
eas build:configure
```

4. Build the APK:
```bash
eas build -p android --profile production
```

5. Once the build completes, download the APK from the Expo dashboard.

### Option 2: Manual Build Process

If you prefer to build locally:

1. Eject from Expo to bare workflow:
```bash
npx expo eject
```

2. Install Android Studio and set up the Android SDK:
   - Download Android Studio from https://developer.android.com/studio
   - During installation, make sure to install the Android SDK, SDK Platforms, and SDK Tools
   - Set up Android_HOME environment variable

3. Navigate to the android directory:
```bash
cd android
```

4. Build the APK:
```bash
./gradlew assembleRelease
```

The APK will be located at:
`android/app/build/outputs/apk/release/app-release.apk`

### Option 3: Using Expo Application Services (EAS) Locally

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Build locally:
```bash
eas build --platform android --profile production --local
```

## Deployment to Aptoide Connect

1. Install EAS CLI globally:
```bash
npm install -g eas-cli
```

2. Build the Android APK:
```bash
eas build -p android --profile production
```

3. Download the generated APK from the Expo dashboard

4. Visit [Aptoide Connect](https://connect.aptoide.com) and upload the APK

See `Aptoide_Deployment_Guide.md` for detailed instructions.