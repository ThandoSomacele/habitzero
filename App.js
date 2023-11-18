import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Each day conquered, is a battle won.{'\n'}You may stubmle but pick yourself up and keep going. Don't give up.
      </Text>
      <StatusBar style='auto' />
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
      <Pressable
        onPress={() => alert('Noted in calendar.')}
        style={{
          backgroundColor: 'white',
          borderColor: '#DC7272',
          borderWidth: 4,
          borderRadius: 100,
          padding: 2,
          ...styles.center,
          elevation: 5,
        }}>
        <View
          style={{
            ...styles.center,
            backgroundColor: '#DC7272',
            borderRadius: 100,
            padding: 15,
            width: '100%',
          }}>
          <Text style={{ color: 'white' }}>Tap if you've relapsed today</Text>
        </View>
      </Pressable>
      <Text style={{ textAlign: 'center' }}>Focus on your wins, not the losses.{'\n'}Take it one day at a time.</Text>
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
});
