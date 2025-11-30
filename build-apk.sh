#!/bin/bash

echo "QuoteCrafter APK Build Script"
echo "============================="

echo "Checking for required tools..."

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install Node.js and npm."
    exit 1
fi

# Check if eas is installed
if ! command -v eas &> /dev/null
then
    echo "EAS CLI could not be found. Installing EAS CLI..."
    npm install -g eas-cli
fi

echo "Installing project dependencies..."
npm install

echo "Building APK using EAS Build..."
echo "Please make sure you're logged in to Expo:"
echo "Run 'eas login' if you haven't already"

eas build -p android --profile production

echo "Build process started. Check the Expo dashboard for progress."
echo "Once completed, download the APK and upload it to Aptoide."