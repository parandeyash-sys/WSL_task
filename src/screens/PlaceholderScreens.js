import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceholderScreen = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name} Screen</Text>
    <Text style={styles.subtitle}>Welcome to your {name.toLowerCase()} dashboard.</Text>
  </View>
);

export const HomeScreen = () => <PlaceholderScreen name="Home" />;
export const ProfileScreen = () => <PlaceholderScreen name="Profile" />;
export const SettingsScreen = () => <PlaceholderScreen name="Settings" />;
export const DirectoryScreen = () => <PlaceholderScreen name="Directory" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
