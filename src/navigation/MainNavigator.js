import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, ProfileScreen, SettingsScreen, DirectoryScreen } from '../screens/PlaceholderScreens';
import ConnectionDetailScreen from '../screens/ConnectionDetailScreen';

import { View, Animated, StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Custom Tab Icon with Pop Animation and Capsule Indicator
const TabIcon = ({ name, focused, color }) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (focused) {
      Animated.spring(scaleValue, {
        toValue: 1.2,
        friction: 4,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }).start();
    }
  }, [focused]);

  return (
    <View style={styles.iconContainer}>
      {focused && <View style={styles.activeCapsule} />}
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Ionicons name={name} size={24} color={color} />
      </Animated.View>
    </View>
  );
};

// Bottom Tab Navigator for frequent actions
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
          
          return <TabIcon name={iconName} focused={focused} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelPosition: 'below-icon',
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ 
            color, 
            fontSize: focused ? 11 : 10, 
            fontWeight: focused ? '700' : '500',
            marginTop: 4
          }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: { 
          height: 70, 
          paddingBottom: 5,
          paddingTop: 10,
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 32,
  },
  activeCapsule: {
    position: 'absolute',
    width: 50,
    height: 32,
    backgroundColor: '#E8F2FF',
    borderRadius: 16,
  },
});

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
