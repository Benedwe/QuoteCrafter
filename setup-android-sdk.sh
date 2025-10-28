#!/bin/bash

# Create Android SDK directory
mkdir -p ~/Android/sdk

# Set environment variables
echo "export ANDROID_HOME=$HOME/Android/sdk" >> ~/.bashrc
echo "export PATH=\$PATH:\$ANDROID_HOME/tools:\$ANDROID_HOME/platform-tools" >> ~/.bashrc

# Create .env file for the project
echo "ANDROID_HOME=$HOME/Android/sdk" > .env

echo "Android SDK environment variables set up!"
echo ""
echo "Next steps:"
echo "1. Download Android SDK Command-line tools from:"
echo "   https://developer.android.com/studio#command-tools"
echo "2. Extract the downloaded zip to $HOME/Android/sdk/"
echo "3. Run: source ~/.bashrc"
echo "4. Run: sdkmanager \"platform-tools\" \"platforms;android-33\""
echo ""
echo "After completing these steps, restart the terminal and run:"
echo "npx expo start --tunnel"