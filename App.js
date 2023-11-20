import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainView from './MainView';
import CalanderView from './CalanderView';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainView /> */}
      <CalanderView />
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
