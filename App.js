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
      name: '',
      email: '',
      phone: '',
    };
  }

  navigateToStartingScreen = () => {
    this.setState({
      isStartingScreenVisible: true,
      isConfirmScreenVisible: false,
      isGameScreenVisible: false,
    });
  };

  navigateToConfirmScreen = (name, email, phone) => {
    this.setState({
      isStartingScreenVisible: false,
      isConfirmScreenVisible: true,
      isGameScreenVisible: false,
      name,
      email,
      phone,
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
    const { isStartingScreenVisible, isConfirmScreenVisible, isGameScreenVisible, name, email, phone } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {isStartingScreenVisible && (
          <StartingScreen
            onContinue={(name, email, phone) => this.navigateToConfirmScreen(name, email, phone)}
          />
        )}
        {isConfirmScreenVisible && (
          <ConfirmScreen
            name={name}
            email={email}
            phone={phone}
            onGoBack={this.navigateToStartingScreen}
            onContinue={this.navigateToGameScreen}
          />
        )}
        {isGameScreenVisible && (
          <GameScreen
            onLogout={this.navigateToStartingScreen}
          />
        )}
      </View>
    );
  }
}

export default App;
