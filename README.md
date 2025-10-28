# QuoteCrafter

A minimal Expo React Native app that shows random motivational quotes from a local JSON file. Features:

- Random quote generator
- Favorite quotes (stored in AsyncStorage)
- Share quotes
- Create custom quotes
- Light/Dark theme toggle
- Minimalist UI with gradient background and smooth animations
- AdMob placeholders (banner + interstitial) using Expo AdMob test IDs

Quick start

1. Install dependencies

```bash
npm install
```

2. Run in Expo

```bash
npx expo start
```

Notes

- AdMob uses Google test IDs by default. Replace with your ad unit IDs in `App.js` when ready for production.
- This project is a minimal scaffold — feel free to expand UI and add more quotes.

AdMob setup

1. Create AdMob account and app/unit ids.
2. Replace the test ad unit IDs in `App.js` with your real IDs.
3. For Expo managed workflow, follow the `expo-ads-admob` docs to configure native build or use EAS build for production.
