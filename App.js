import React, { Component } from 'react';
import StartingScreen from './screens/StartingScreen'; // Adjust the path as needed
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true,
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center' }}>
        <Text style={{ color: 'white', padding: 20 }}>Welcome</Text>
        <Modal isVisible={this.state.isModalVisible}>
          <StartingScreen />
        </Modal>
      </View>
    );
  }
}

export default App;
