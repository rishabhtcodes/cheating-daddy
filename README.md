<img width="1299" height="424" alt="Cheating Daddy Logo" src="https://github.com/user-attachments/assets/b25fff4d-043d-4f38-9985-f832ae0d0f6e" />

# Cheating Daddy

A real-time AI assistant that provides contextual help during video calls, interviews, presentations, and meetings using screen capture and audio analysis.

> [!NOTE]  
> Use the latest MacOS and Windows versions. Older versions have limited support.

> [!NOTE]  
> During testing, it won't answer if you just talk to it directly. You need to simulate a real environment (e.g., an interviewer asking a question), which it will then analyze and answer.

## Features

- **Live AI Assistance**: Real-time help powered by Google Gemini 2.0 Flash Live and Groq.
- **Screen & Audio Capture**: Analyzes what you see and hear for contextual responses.
- **Multiple Profiles**: Interview, Sales Call, Business Meeting, Presentation, Negotiation.
- **Transparent Overlay**: Flexible, always-on-top window that can be positioned anywhere securely.
- **Ghost Mode**: Make the window entirely transparent to clicks (`Ctrl+M`) so you can interact with your applications beneath it effortlessly.
- **Cross-platform**: Works natively on macOS, Windows, and Linux.

## Setup

1. **Get API Keys**: Visit [Google AI Studio](https://aistudio.google.com/apikey) to get your free Gemini API key.
2. **Install Dependencies**: `npm install`
3. **Run the App**: `npm start`

## Usage

1. Enter your API keys in the setup window.
2. Choose your profile, language, and custom system prompts in the settings.
3. Click "Start Session" to begin.
4. Position the window using keyboard shortcuts so it doesn't obstruct your view.
5. The AI will provide real-time assistance based on your screen and audio feed seamlessly!

## Keyboard Shortcuts

- **Manual Capture**: `Ctrl/Cmd + Enter` - Take a quick screenshot for analysis
- **Long Capture (Auto-Scroll)**: `Ctrl/Cmd + Shift + Enter` - Auto-scroll capture for long documents or questions
- **Window Movement**: `Ctrl/Cmd + Arrow Keys` - Shift window position
- **Ghost Mode**: `Ctrl/Cmd + M` - Toggle mouse click-through functionality
- **Close/Back**: `Ctrl/Cmd + \` - Hide window or go back
- **Navigate History**: `Ctrl/Cmd + [` or `]` - Cycle through previous/next responses
- **Emergency Erase**: `Ctrl/Cmd + Shift + E` - Instantly erase history and close

## Audio Capture

- **macOS**: [SystemAudioDump](https://github.com/Mohammed-Yasin-Mulla/Sound) for system audio
- **Windows**: Native Loopback audio capture
- **Linux**: Microphone input

## Requirements

- Electron-compatible OS (macOS, Windows, Linux)
- Valid API keys
- Screen recording permissions
- Microphone/audio permissions
