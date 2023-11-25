import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RelapseButton from '../components/RelapseButton';

function MainView() {
  return (
    <React.Fragment>
      <Text style={{ textAlign: 'center' }}>
        Each day conquered, is a battle won.{'\n'}You may stubmle but pick yourself up and keep going. Don't give up.
      </Text>
      <View
        style={{
          borderColor: '#47A8BD',
          borderWidth: 7,
          borderRadius: 100,
          padding: 4,
          height: 200,
          width: 200,
          ...styles.center,
        }}>
        <View
          style={{
            ...styles.center,
            backgroundColor: '#47A8BD',
            borderRadius: 100,
            height: '100%',
            width: '100%',
          }}>
          <Text style={{ color: 'white', fontSize: 60, fontWeight: '900' }}>14</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>Battles Won</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>🙌</Text>
        </View>
      </View>
      {/* <RelapseButton /> TODO */}
      <Text style={{ textAlign: 'center' }}>Focus on your wins, not the losses.{'\n'}Take it one day at a time.</Text>
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

export default MainView;
