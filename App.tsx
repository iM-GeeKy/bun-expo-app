import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Conversation,
} from "@twilio/conversations";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bun Example App</Text>
      <Text>{Conversation ? 'Found Twilio Class' : 'Twilio Class Not Found'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
