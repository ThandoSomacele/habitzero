import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainView from './Views/MainView';
import ProgressView from './Views/ProgressView';
import { calculateDaysWon } from './utils/dateUtils';

export default function App() {
  const [currentView, setCurrentView] = useState('main');
  const [relapseDates, setRelapseDates] = useState([]);
  const [daysWon, setDaysWon] = useState(0);
  const [startDate, setStartDate] = useState(new Date().toISOString()); // Track when user started

  // Calculate days won whenever relapse dates change or daily
  useEffect(() => {
    const totalDaysWon = calculateDaysWon(relapseDates, startDate);
    setDaysWon(totalDaysWon);

    // Set up daily check at midnight to update the calendar
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilMidnight = tomorrow - now;

    const midnightTimer = setTimeout(() => {
      // Recalculate at midnight
      const newDaysWon = calculateDaysWon(relapseDates, startDate);
      setDaysWon(newDaysWon);

      // Set up recurring daily check
      const dailyInterval = setInterval(() => {
        const updatedDaysWon = calculateDaysWon(relapseDates, startDate);
        setDaysWon(updatedDaysWon);
      }, 24 * 60 * 60 * 1000); // Check every 24 hours

      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimer);
  }, [relapseDates, startDate]);

  // Handler to add a relapse date
  const addRelapseDate = (dateString) => {
    if (!relapseDates.includes(dateString)) {
      setRelapseDates([...relapseDates, dateString]);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {currentView === 'main' ? (
          <MainView daysWon={daysWon} />
        ) : (
          <ProgressView relapseDates={relapseDates} onAddRelapseDate={addRelapseDate} startDate={startDate} />
        )}

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
      </SafeAreaView>
    </SafeAreaProvider>
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
