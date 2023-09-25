import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import PhoneInput from '../components/PhoneInput';
import Checkbox from '../components/Checkbox';
import StartingButtons from '../components/StartingButtons';

class StartingScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      isRobot: false,
      nameError: false, // Changed to boolean
      emailError: false, // Changed to boolean
      phoneError: false, // Changed to boolean
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
      nameError: false, // Reset to false
      emailError: false, // Reset to false
      phoneError: false, // Reset to false
    });
  };

  handleStart = () => {
    const { name, email, phone } = this.state;

    // Validation checks
    let nameError = !name || !isNaN(name);
    let emailError = !email || !email.includes('@');
    let phoneError = !phone || isNaN(phone) || phone.length !== 10;

    if (nameError || emailError || phoneError) {
      // Set error flags to true if any of the validation checks fail
      this.setState({ nameError, emailError, phoneError });
    } else {
      // Handle what should happen when all inputs are valid and Start is clicked
      alert('Form submitted successfully!');
    }
  };

  render() {
    const { name, email, phone, isRobot, nameError, emailError, phoneError } = this.state;
    return (
      <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center' }}>
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
