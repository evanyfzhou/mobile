import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import PhoneInput from '../components/PhoneInput';
import Checkbox from '../components/Checkbox';
import StartingButtons from '../components/StartingButtons';
import AppStyles from '../components/AppStyles';
import { LinearGradient } from 'expo-linear-gradient';

class StartingScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      isRobot: false,
      nameError: false,
      emailError: false,
      phoneError: false,
    };
  }

  handleNameChange = (text) => {
    this.setState({ name: text });
  };

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handlePhoneChange = (text) => {
    this.setState({ phone: text });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isRobot: !prevState.isRobot,
    }));
  };

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      isRobot: false,
      nameError: false,
      emailError: false,
      phoneError: false,
    });
  };

  handleStart = () => {
    const { name, email, phone } = this.state;

    let nameError = !name || !isNaN(name);
    let emailError = !email || !email.includes('@');
    let phoneError = !phone || isNaN(phone) || phone.length !== 10;

    if (nameError || emailError || phoneError) {
      this.setState({ nameError, emailError, phoneError });
    } else {
      this.props.onContinue(name, email, phone);
    }
  };

  render() {
    const { name, email, phone, isRobot, nameError, emailError, phoneError } = this.state;

    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={AppStyles.startingScreenContainer}>
        <Text style={AppStyles.startingScreenText}>Welcome</Text>
        <View style={AppStyles.startingScreenInnerContainer}>
          <NameInput value={name} onChange={this.handleNameChange} isError={nameError} />
          <EmailInput value={email} onChange={this.handleEmailChange} isError={emailError} />
          <PhoneInput value={phone} onChange={this.handlePhoneChange} isError={phoneError} />
          <Checkbox isChecked={isRobot} onChange={this.handleCheckboxChange} />
          <StartingButtons onReset={this.handleReset} onStart={this.handleStart} isStartDisabled={!isRobot} />
        </View>
      </LinearGradient>
    );
  }
}

export default StartingScreen;
