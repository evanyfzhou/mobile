import React, { Component } from 'react';
import { View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartingScreenVisible: true,
      isConfirmScreenVisible: false,
      isGameScreenVisible: false,
    };
  }

  navigateToConfirmScreen = () => {
    this.setState({
      isStartingScreenVisible: false,
      isConfirmScreenVisible: true,
      isGameScreenVisible: false,
    });
  };

  navigateToGameScreen = () => {
    this.setState({
      isStartingScreenVisible: false,
      isConfirmScreenVisible: false,
      isGameScreenVisible: true,
    });
  };

  render() {
    const { isStartingScreenVisible, isConfirmScreenVisible, isGameScreenVisible } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {isStartingScreenVisible && (
          <StartingScreen
            onContinue={this.navigateToConfirmScreen}
          />
        )}
        {isConfirmScreenVisible && (
          <ConfirmScreen
            onContinue={this.navigateToGameScreen}
          />
        )}
        {isGameScreenVisible && <GameScreen />}
      </View>
    );
  }
}

export default App;
