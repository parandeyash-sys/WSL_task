# IUDX Frontend Task — React Native Implementation

A premium React Native mobile application implementation for the IUDX (India Urban Data Exchange) frontend challenge. This project demonstrates advanced navigation nesting and data-driven obligation dashboards.

## 🚀 Features

### 1. Dynamic Bottom Navigation
- **Nested Architecture**: Implements a `BottomTabNavigator` nested inside a `DrawerNavigator`.
- **Primary Actions**: Frequently used modules (**Home**, **Profile**, **Settings**) are directly accessible via a sleek bottom bar.
- **Secondary Actions**: Less frequent modules (**Directory**, **Connection Obligations**) are kept in the sidebar to reduce UI clutter.
- **Visual Feedback**: Active screen highlighting and high-quality vector icons.

### 2. Connection Obligation Dashboard
- **Established Connections**: High-visibility status badges and detailed connection headers.
- **Entity Cards**: Side-by-side view of Host (e.g., Kaveri Hospital) and Guest (e.g., Meghana) details, including Locker IDs.
- **Tabbed Obligation View**: Segmented control to switch between "Your Obligations" and "Host Obligations."
- **Conditional Forbidden Terms**: Smart rendering logic that hides the "Forbidden Terms" section if none are applicable (verified Guest vs Host scenario).

## 🛠️ Tech Stack
- **Framework**: React Native (Expo)
- **Navigation**: React Navigation v6/v7 (Drawer, Bottom Tabs)
- **Icons**: Expo Vector Icons (Ionicons)
- **Styling**: Vanilla React Native StyleSheet for maximum performance and consistency.

## 💻 Compatibility & Setup
This project is optimized for **Node.js 18+**. It includes custom polyfills for `Array.prototype.toReversed` to ensure the Metro bundler runs smoothly on older LTS environments.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/parandeyash-sys/WSL_task.git
   cd WSL_task
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server (Web/Android/iOS):
```bash
npx expo start --web
```

## 📂 Project Structure
```text
WSL_task/
├── App.js                # App entry point with NavigationContainer
├── src/
│   ├── data/
│   │   └── mockData.js   # Centralized data store for connections
│   ├── navigation/
│   │   └── MainNavigator.js # Nested Drawer/Tab logic
│   └── screens/
│       ├── ConnectionDetailScreen.js # Detailed Obligations UI
│       └── PlaceholderScreens.js     # Home, Profile, Settings screens
```

---
*Developed as part of the IUDX Frontend Challenge.*
