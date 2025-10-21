
import { StyleSheet, View } from 'react-native';
import Calculadora from './src/components/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculadora/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
