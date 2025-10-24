import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Calendar from '../components/CalendarProgress';

function ProgressView({ relapseDates, onAddRelapseDate, startDate }) {
  return (
    <React.Fragment>
      <Text style={styles.headerText}>
        Only focus on keeping each day green and clean. Start with just winnnig today's battle and slowly progress to
        winning the battles for a week.{' '}
      </Text>
      <Calendar relapseDates={relapseDates} onAddRelapseDate={onAddRelapseDate} startDate={startDate} />
      <Text style={styles.footerText}>
        "If errors were what you watch, O jah, O Jehovah, who could stand?"{'\n\n'}- An Ancient Psalmist
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
  headerText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 19,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default ProgressView;
