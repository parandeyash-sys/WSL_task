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
          <Text style={styles.title}>Patient Health Records Connection-Meghana:Kaveri Hospital</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Connection name-Patient Health Records Connection-Meghana:Kaveri Hospital</Text>
            <Text style={styles.description}>Connection through which Patients can Avail their Health Records</Text>
          </View>
        </View>

        {/* Entity Flow Diagrams */}
        <View style={styles.flowCard}>
          {/* Row 1: Participants */}
          <View style={styles.flowRow}>
            <View style={styles.node}>
              <View style={styles.circle}><Text style={styles.circleText}>G</Text></View>
              <Text style={styles.nodeLabel}>: {data.guest.name}</Text>
            </View>
            <Ionicons name="arrow-forward" size={24} color="#007AFF" style={styles.flowArrow} />
            <View style={styles.node}>
              <View style={styles.circle}><Text style={styles.circleText}>H</Text></View>
              <Text style={styles.nodeLabel}>: {data.host.name}</Text>
            </View>
          </View>

          {/* Row 2: Lockers */}
          <View style={styles.flowRow}>
            <View style={styles.node}>
              <View style={styles.lockContainer}>
                <Ionicons name="lock-closed" size={32} color="#007AFF" />
                <View style={styles.attachedCircle}><Text style={styles.smallCircleText}>G</Text></View>
              </View>
              <Text style={styles.nodeLabel}>: Meghana Health Document Locker</Text>
            </View>
            <Ionicons name="arrow-forward" size={24} color="#007AFF" style={styles.flowArrow} />
            <View style={styles.node}>
              <View style={styles.lockContainer}>
                <Ionicons name="lock-closed" size={32} color="#007AFF" />
                <View style={styles.attachedCircle}><Text style={styles.smallCircleText}>H</Text></View>
              </View>
              <Text style={styles.nodeLabel}>: Health Records Locker</Text>
            </View>
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

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Forbidden Terms</Text>
          {currentEntity.forbidden && currentEntity.forbidden.length > 0 ? (
            renderObligations(currentEntity.forbidden, 'forbidden')
          ) : (
            <View style={styles.termItem}>
              <Ionicons name="information-circle" size={20} color="#909499" />
              <Text style={styles.termText}>{currentEntity.forbiddenMessage || 'No forbidden items available'}</Text>
            </View>
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
  descriptionContainer: {
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: '#606469',
    lineHeight: 20,
  },
  flowCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  flowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  node: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F2FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  circleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  lockContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 6,
  },
  attachedCircle: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E8F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    zIndex: 1,
  },
  smallCircleText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  nodeLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1C1E',
  },
  flowArrow: {
    marginHorizontal: 12,
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
