import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import AppStyles from '../components/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';

class ConfirmScreen extends Component {
  render() {
    const { name, email, phone, onGoBack, onContinue } = this.props;

    return (
      <Modal isVisible={true} animationIn="slideInUp" animationOut="slideOutDown">
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={AppStyles.confirmScreenContainer}>
          <View style={AppStyles.confirmScreenInnerContainer}>
            <Text style={AppStyles.confirmScreenText}>Hello {name}!</Text>
            <Text style={AppStyles.confirmScreenText}>Please confirm the following information is correct by pressing the continue button:</Text>
            <Text style={AppStyles.confirmScreenText}>Email: {email}</Text>
            <Text style={AppStyles.confirmScreenText}>Phone: {phone}</Text>
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
