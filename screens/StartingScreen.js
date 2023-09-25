import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import PhoneInput from '../components/PhoneInput';
import Checkbox from '../components/Checkbox';
import StartingButtons from '../components/StartingButtons';
import ConfirmScreen from './ConfirmScreen';
import GameScreen from './GameScreen';

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
      isConfirmVisible: false,
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
      this.setState({ isConfirmVisible: true });
    }
  };

  handleGoBack = () => {
    this.setState({ isConfirmVisible: false });
  };

  handleContinue = () => {
    this.setState({ isConfirmVisible: false, isGameVisible: true });
  };

  render() {
    const { name, email, phone, isRobot, nameError, emailError, phoneError, isConfirmVisible, isGameVisible } = this.state;

    if (isConfirmVisible) {
      return (
        <ConfirmScreen
          name={name}
          email={email}
          phone={phone}
          onGoBack={this.handleGoBack}
          onContinue={this.handleContinue}
        />
      );
    }

    if (isGameVisible) {
      return <GameScreen />;
    }

    return (
      <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', padding: 20 }}>Welcome</Text>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <NameInput value={name} onChange={this.handleNameChange} isError={nameError} />
          <EmailInput value={email} onChange={this.handleEmailChange} isError={emailError} />
          <PhoneInput value={phone} onChange={this.handlePhoneChange} isError={phoneError} />
          <Checkbox isChecked={isRobot} onChange={this.handleCheckboxChange} />
          <StartingButtons onReset={this.handleReset} onStart={this.handleStart} isStartDisabled={!isRobot} />
        </View>
      </View>
    );
  }
}

export default StartingScreen;
