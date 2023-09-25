import React, { Component } from 'react';
import { View, Text } from 'react-native';

class GameScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', padding: 20 }}>Game Screen</Text>
      </View>
    );
  }
}

export default GameScreen;