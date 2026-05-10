import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connectionData } from '../data/mockData';

const ConnectionDetailScreen = () => {
  const [activeTab, setActiveTab] = useState('guest'); // 'guest' or 'host'
  const data = connectionData;

  const renderObligations = (list, type) => {
    if (!list || list.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No {type} terms specified.</Text>
        </View>
      );
    }

    return list.map((item, index) => (
      <View key={index} style={styles.termItem}>
        <Ionicons 
          name={type === 'forbidden' ? 'close-circle' : 'checkmark-circle'} 
          size={20} 
          color={type === 'forbidden' ? '#E74C3C' : '#27AE60'} 
        />
        <Text style={styles.termText}>{item}</Text>
      </View>
    ));
  };

  const currentEntity = activeTab === 'guest' ? data.guest : data.host;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Connection Header */}
        <View style={styles.headerCard}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{data.status}</Text>
          </View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>

        {/* Entity Info */}
        <View style={styles.entitySection}>
          <View style={styles.entityCard}>
            <Text style={styles.entityLabel}>Guest</Text>
            <Text style={styles.entityName}>{data.guest.name}</Text>
            <Text style={styles.lockerId}>{data.guest.lockerId}</Text>
          </View>
          <View style={styles.entityCard}>
            <Text style={styles.entityLabel}>Host</Text>
            <Text style={styles.entityName}>{data.host.name}</Text>
            <Text style={styles.lockerId}>{data.host.lockerId}</Text>
          </View>
        </View>

        {/* Tab Switcher */}
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'guest' && styles.activeTab]}
            onPress={() => setActiveTab('guest')}
          >
            <Text style={[styles.tabText, activeTab === 'guest' && styles.activeTabText]}>
              Your Obligations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'host' && styles.activeTab]}
            onPress={() => setActiveTab('host')}
          >
            <Text style={[styles.tabText, activeTab === 'host' && styles.activeTabText]}>
              {data.host.name}'s Obligations
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Obligation Terms</Text>
          {renderObligations(currentEntity.obligations, 'obligation')}

          {currentEntity.forbidden && currentEntity.forbidden.length > 0 && (
            <>
              <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Forbidden Terms</Text>
              {renderObligations(currentEntity.forbidden, 'forbidden')}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F9',
  },
  scrollContent: {
    padding: 16,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  statusBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  statusText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1C1E',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#606469',
    lineHeight: 20,
  },
  entitySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  entityCard: {
    flex: 0.48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E1E4E8',
  },
  entityLabel: {
    fontSize: 10,
    color: '#909499',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  entityName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1C1E',
  },
  lockerId: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 2,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#E1E4E8',
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 13,
    color: '#606469',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#1A1C1E',
    fontWeight: '700',
  },
  contentSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1C1E',
    marginBottom: 16,
  },
  termItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  termText: {
    fontSize: 14,
    color: '#3C4043',
    marginLeft: 10,
    flex: 1,
    lineHeight: 20,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    color: '#909499',
    fontStyle: 'italic',
  },
});

export default ConnectionDetailScreen;
