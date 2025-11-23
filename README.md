# QuoteCrafter

A minimal React Native app that shows random motivational quotes.

## Development

1. Install dependencies

```bash
npm install
```

2. Run in Expo

```bash
npx expo start
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

See `Aptoide_Deployment_Guide.txt` for detailed instructions.