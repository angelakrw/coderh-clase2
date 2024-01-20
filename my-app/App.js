import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#845ec2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#00c9a7',
    fontSize: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
});
