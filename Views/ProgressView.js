import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Calendar from '../components/CalendarProgress';

function ProgressView() {
  return (
    <React.Fragment>
      <Text style={{ textAlign: 'center' }}>
        Only focus on keeping each day green and clean. Start with just winnnig today’s battle and slowly progress to
        winning the battles for a week.{' '}
      </Text>
      <Calendar />
      <Text style={{ textAlign: 'center' }}>
        “If errors were what you watch, O jah, O Jehovah, who could stand?”{'\n\n'}- An Ancient Psalmist
      </Text>
    </React.Fragment>
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
});

export default ProgressView;
