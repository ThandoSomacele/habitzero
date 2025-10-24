import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RelapseButton from '../components/RelapseButton';

function MainView({ daysWon = 0 }) {
  return (
    <React.Fragment>
      <Text style={styles.headerText}>
        Each day conquered, is a battle won.{'\n'}You may stubmle but pick yourself up and keep going. Don't give up.
      </Text>
      <View
        style={{
          borderColor: '#47A8BD',
          borderWidth: 8,
          borderRadius: 120,
          padding: 4,
          height: 240,
          width: 240,
          ...styles.center,
        }}>
        <View
          style={{
            ...styles.center,
            backgroundColor: '#47A8BD',
            borderRadius: 120,
            height: '100%',
            width: '100%',
          }}>
          <Text style={styles.counterText}>{daysWon}</Text>
          <Text style={styles.labelText}>Battles Won</Text>
          <Text style={styles.emojiText}>🙌</Text>
        </View>
      </View>
      {/* <RelapseButton /> TODO */}
      <Text style={styles.footerText}>Focus on your wins, not the losses.{'\n'}Take it one day at a time.</Text>
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
    fontSize: 18,
    lineHeight: 26,
    color: '#333',
  },
  counterText: {
    color: 'white',
    fontSize: 72,
    fontWeight: '900',
  },
  labelText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  emojiText: {
    fontSize: 28,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 26,
    color: '#333',
  },
});

export default MainView;
