# BLUENT Social

A simple and modern social app built with Capacitor and vanilla JavaScript.

## Features

✨ **Core Features:**
- Create and share posts
- Like/reaction system
- Light/dark theme toggle
- Mobile-first responsive design
- XSS protection

## Project Structure

```
bluent-social/
├── www/                    # Web assets
│   ├── index.html         # Main HTML
│   ├── style.css          # Styling
│   ├── script.js          # Frontend logic
│   └── assets/            # Images, icons, etc.
├── android/               # Android native code
├── capacitor.config.json  # Capacitor configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rohinisonawane102-eng/bluent-social.git
cd bluent-social
```

2. Install dependencies:
```bash
npm install
```

3. Build for web:
```bash
npm run build
```

## Building for Android

### Prerequisites
- Android Studio
- JDK 11+
- Android SDK API 31+

### Steps

1. Generate signing key (first time only):
```bash
keytool -genkey -v -keystore bluent-social.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias bluent
```

2. Build AAB (Android App Bundle):
```bash
npm run build:android
```

The AAB file will be generated at:
```
android/app/build/outputs/bundle/release/app-release.aab
```

3. Upload to Google Play Console

## Environment Setup

Create a `.env` file for sensitive configuration:
```
KEYSTORE_PATH=./bluent-social.keystore
KEYSTORE_PASSWORD=your_password
KEY_ALIAS=bluent
KEY_PASSWORD=your_key_password
```

## Development

```bash
# Start development server
npm start

# Run tests
npm test
```

## Contributing

Fork the repository and create a pull request with your changes.

## License

MIT
