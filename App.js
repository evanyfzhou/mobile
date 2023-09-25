import React, { Component } from 'react';
import StartingScreen from './screens/StartingScreen'; // Adjust the path as needed
import { View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center' }}>
        <StartingScreen />
      </View>
    );
  }
}

export default App;
