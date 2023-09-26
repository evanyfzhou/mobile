import React, { Component } from 'react';
import { View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';

class App extends Component {
  // Initialize component state
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

  // Function to navigate to the StartingScreen
  navigateToStartingScreen = () => {
    this.setState({
      isStartingScreenVisible: true,
      isConfirmScreenVisible: false,
      isGameScreenVisible: false,
    });
  };

  // Function to navigate to the ConfirmScreen with name, email, and phone
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

  // Function to navigate to the GameScreen
  navigateToGameScreen = () => {
    this.setState({
      isStartingScreenVisible: false,
      isConfirmScreenVisible: false,
      isGameScreenVisible: true,
    });
  };

  // Render method to display components based on state
  render() {
    const { isStartingScreenVisible, isConfirmScreenVisible, isGameScreenVisible, name, email, phone } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {/* Show StartingScreen if its state is true */}
        {isStartingScreenVisible && (
          <StartingScreen
            onContinue={(name, email, phone) => this.navigateToConfirmScreen(name, email, phone)}
          />
        )}
        {/* Show ConfirmScreen if its state is true */}
        {isConfirmScreenVisible && (
          <ConfirmScreen
            name={name}
            email={email}
            phone={phone}
            onGoBack={this.navigateToStartingScreen}
            onContinue={this.navigateToGameScreen}
          />
        )}
        {/* Show GameScreen if its state is true */}
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
