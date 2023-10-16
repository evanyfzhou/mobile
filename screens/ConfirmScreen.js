import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import AppStyles from '../components/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';

class ConfirmScreen extends Component {
  render() {
    const { name, email, phone, onGoBack, onContinue } = this.props;

    return (
      // Modal wrapper to make the screen a pop-up
      <Modal isVisible={true} animationIn="slideInUp" animationOut="slideOutDown">
        {/* Background gradient */}
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={AppStyles.confirmScreenContainer}>
          {/* Container for the content */}
          <View style={AppStyles.confirmScreenInnerContainer}>
            {/* Display greeting and user's name */}
            <Text style={AppStyles.confirmScreenText}>Hello {name}!</Text>
            {/* Instruction for the user */}
            <Text style={AppStyles.confirmScreenText}>Please confirm the following information is correct by pressing the continue button:</Text>
            {/* Display user's email */}
            <Text style={AppStyles.confirmScreenText}>Email: {email}</Text>
            {/* Display user's phone number */}
            <Text style={AppStyles.confirmScreenText}>Phone: {phone}</Text>
            {/* Buttons for navigation */}
            <View style={AppStyles.confirmScreenButtons}>
              <Button title="Go Back" onPress={onGoBack} />
              <Button title="Continue" onPress={onContinue} />
            </View>
          </View>
        </LinearGradient>
      </Modal>
    );
  }
}

export default ConfirmScreen;
