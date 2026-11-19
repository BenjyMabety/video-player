# Angular Video Player Application

## Project Overview
A fully functional video player web application built with Angular 16, TypeScript, and vanilla HTML5 video element.
Deployed using Github Pages here: https://benjymabety.github.io/video-player/

## Features Implemented

### 1. Core Functionality
- **Video Upload**: Click the "Upload" button to select a video file from your local drive
- **Video Loading**: Selected video loads into the player (HTML5 video element)
- **Playback Controls**: 
  - **Play** - Start video playback (enabled when video is loaded)
  - **Pause** - Pause playback (enabled when playing)
  - **Stop** - Stop playback and discard the video with confirmation dialog
- **Volume Control**:
  - **Vol +** - Increase volume by 10% (enabled when video loaded)
  - **Vol -** - Decrease volume by 10% (enabled when video loaded)

### 2. User Experience
- **File Explorer Integration**: Upload button triggers native file picker
- **Confirmation Dialog**: Stop button shows `window.confirm()` popup before discarding video
- **Responsive Feedback**: Status row displays current file name and volume level
- **Button States**: Intelligent enable/disable logic based on player state:
  - Upload: Always enabled
  - Play: Enabled only when video ready and not playing
  - Pause: Enabled only when playing
  - Stop: Enabled when video is loaded
  - Volume: Enabled only when video is loaded

### 3. UI Design
- Clean, modern interface with professional styling
- Black video frame for traditional player look
- Blue control buttons with hover effects
- Status indicators for file and volume
- Responsive layout (max-width: 860px, centered)
- Gradient background for visual appeal

## Project Structure

```
video-player/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Main component logic
│   │   ├── app.component.html     # Template
│   │   ├── app.component.css      # Styling
│   │   └── app.module.ts          # Angular module
│   ├── main.ts                    # Application entry point
│   ├── polyfills.ts               # Browser polyfills
│   ├── index.html                 # HTML shell
│   └── styles.css                 # Global styles
├── angular.json                   # Angular configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies
└── node_modules/                  # Installed packages
```

## Technology Stack
- **Framework**: Angular 16.2.0
- **Language**: TypeScript 5.1.6
- **Runtime**: Node.js with zone.js
- **Build Tool**: Angular CLI
- **Dev Server**: Angular development server (localhost:4200)

## Running the Application

### Development Server
```bash
npm start
```
The app will automatically open at `http://localhost:4200`

### Production Build
```bash
npm run build
```
Output in `dist/video-player/`

## Component Features

### AppComponent (`app.component.ts`)
- **State Management**: Tracks video loading, playback status, volume level
- **Video Control Methods**: `play()`, `pause()`, `stop()`, `volumeUp()`, `volumeDown()`
- **File Handling**: Accepts video files via file input, creates object URLs
- **Memory Management**: Properly revokes object URLs to prevent memory leaks
- **Confirmation Logic**: Stop action requires user confirmation via `window.confirm()`

### Key Properties
- `videoSrc`: Current video file URL
- `videoFileName`: Display name of loaded file
- `isPlaying`: Playback state
- `isReady`: Video metadata loaded state
- `volume`: Current volume (0.0 - 1.0)

## Button States

| Button | Initial | Video Loaded | Playing |
|--------|---------|--------------|---------|
| Upload | Enabled | Enabled      | Enabled |
| Play   | Disabled| Enabled      | Disabled|
| Pause  | Disabled| Disabled     | Enabled |
| Stop   | Disabled| Enabled      | Enabled |
| Vol +  | Disabled| Enabled      | Enabled |
| Vol -  | Disabled| Enabled      | Enabled |

## File Support
Accepts all HTML5 video formats:
- MP4 (.mp4)
- WebM (.webm)
- Ogg (.ogv)
- And other formats supported by the browser

## Notes
- No database required (all state stored in component)
- No external video library dependencies
- Pure HTML5 video element for broad compatibility
- Browser-based file picker (no backend needed)
- Responsive design works on desktop and tablet

---
**Status**: ✅ Complete and running
**Access**: http://localhost:4200/
