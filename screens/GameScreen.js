import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import AppStyles from '../components/AppStyles';
import image from '../assets/smiling-face.png'
import { LinearGradient } from 'expo-linear-gradient';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomNumber: Math.floor(Math.random() * 11) + 10,
      showResultCard: false,
      numberOfGuesses: 0,
    };
  }

  handleUserInput = (text) => {
    this.setState({ userInput: text });
  };

  resetInput = () => {
    this.setState({ userInput: '' });
  };

  confirmGuess = () => {
    this.setState(prevState => ({ numberOfGuesses: prevState.numberOfGuesses + 1, showResultCard: true }));
  };

  startNewGame = () => {
    this.setState({
      userInput: '',
      randomNumber: Math.floor(Math.random()) + 10,
      showResultCard: false,
      numberOfGuesses: 0,
    });
  };

  tryAgain = () => {
    this.setState({ showResultCard: false });
  };

  render() {
    const { onLogout } = this.props;
    const { userInput, showResultCard, numberOfGuesses, randomNumber } = this.state;
    const hasGuessedCorrectly = parseInt(userInput, 10) === randomNumber;

    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={AppStyles.gameScreenContainer}>
        <View style={AppStyles.gameScreenLogoutButtonContainer}>
          <TouchableOpacity onPress={onLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
        {showResultCard ? (
          hasGuessedCorrectly ? (
            <View style={AppStyles.gameScreenCard}>
              <Text style={AppStyles.gameScreenText}>You've guessed correctly!</Text>
              <Text style={AppStyles.gameScreenText}>Number of guesses: {numberOfGuesses}</Text>
              <View style={AppStyles.imageContainer}>
                <Image style={AppStyles.image} source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }} />
              </View>
              <TouchableOpacity onPress={this.startNewGame}>
                <Text style={AppStyles.gameScreenText}>New Game</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={AppStyles.gameScreenCard}>
              <Text style={AppStyles.gameScreenText}>You did not guess correctly!</Text>
              <View style={AppStyles.imageContainer}>
                <Image style={AppStyles.image} source={image} />
              </View>
              <TouchableOpacity onPress={this.tryAgain}>
                <Text style={AppStyles.gameScreenText}>Try Again</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <View style={AppStyles.gameScreenCard}>
            <Text style={AppStyles.gameScreenText}>Guess a number between 10 & 20</Text>
            <TextInput value={userInput} onChangeText={this.handleUserInput} style={AppStyles.gameScreenTextInput} />
            <View style={AppStyles.gameScreenButtonContainer}>
              <TouchableOpacity onPress={this.resetInput}>
                <Text style={AppStyles.gameScreenText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.confirmGuess}>
                <Text style={AppStyles.gameScreenText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </LinearGradient>
    );
  }
}

export default GameScreen;
