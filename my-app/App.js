import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, Coder!</Text>
      <Text style={styles.text}>App para la clase 2.</Text>
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
  title: {
    color: '#00c9a7',
    fontSize: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  text: {
    color: '#4ffbdf',
    fontSize: 32,
  }
});
