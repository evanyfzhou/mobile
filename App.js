import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; // Import Button component
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const appName = "MyAwesomeApp";
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Function to close the modal
  const onModalClose = () => {
    setModalVisible(false); // Set modalVisible to false to hide the modal
  };

  return (
    <View style={styles.container}>
      <Input modalVisible={modalVisible} onModalClose={onModalClose} />
      <Text style={styles.txt}>You opened up {appName}</Text>
      <Button title="Toggle Modal" onPress={toggleModal} />
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
  txt: {
    marginBottom: 10,
  }
});
