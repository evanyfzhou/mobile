import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/Header';

export default function App() {
  const appName = "MyAwesomeApp";
  const [textInputValue, setTextInputValue] = useState('');
  const handleTextChange = (text) => {
    setTextInputValue(text)
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={textInputValue}
        onChangeText={handleTextChange}
        placeholder="Type something..."
      />
      <Text style={styles.displayText}>{textInputValue}</Text>
      <Text>You opened up {appName}</Text>
      <Header />
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
