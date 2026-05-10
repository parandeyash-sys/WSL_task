import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, ProfileScreen, SettingsScreen, DirectoryScreen } from '../screens/PlaceholderScreens';
import ConnectionDetailScreen from '../screens/ConnectionDetailScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Bottom Tab Navigator for frequent actions
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// Main Navigator (Drawer) that wraps the Bottom Tabs
const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#007AFF',
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#333',
      }}
    >
      {/* Primary Dashboard with Bottom Tabs */}
      <Drawer.Screen 
        name="Dashboard" 
        component={BottomTabNavigator} 
        options={{
          drawerLabel: 'Home Dashboard',
          drawerIcon: ({ color, size }) => <Ionicons name="grid-outline" size={size} color={color} />,
        }}
      />

      {/* Less frequently used items in the Drawer */}
      <Drawer.Screen 
        name="Directory" 
        component={DirectoryScreen} 
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />,
        }}
      />
      
      <Drawer.Screen 
        name="ConnectionObligations" 
        component={ConnectionDetailScreen} 
        options={{
          drawerLabel: 'Connection Obligations',
          title: 'Obligation Terms',
          drawerIcon: ({ color, size }) => <Ionicons name="shield-checkmark-outline" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
