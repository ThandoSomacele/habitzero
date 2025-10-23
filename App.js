import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import MainView from './Views/MainView';
import ProgressView from './Views/ProgressView';

export default function App() {
  const [currentView, setCurrentView] = useState('main');

  return (
    <View style={styles.container}>
      {currentView === 'main' ? <MainView /> : <ProgressView />}

      <View style={styles.navigation}>
        <Pressable
          style={[styles.navButton, currentView === 'main' && styles.activeNavButton]}
          onPress={() => setCurrentView('main')}
        >
          <Text style={[styles.navText, currentView === 'main' && styles.activeNavText]}>
            Main
          </Text>
        </Pressable>
        <Pressable
          style={[styles.navButton, currentView === 'progress' && styles.activeNavButton]}
          onPress={() => setCurrentView('progress')}
        >
          <Text style={[styles.navText, currentView === 'progress' && styles.activeNavText]}>
            Progress
          </Text>
        </Pressable>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 70,
    padding: '10%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  navButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    minWidth: 120,
    alignItems: 'center',
  },
  activeNavButton: {
    backgroundColor: '#47A8BD',
  },
  navText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  activeNavText: {
    color: 'white',
  },
});
