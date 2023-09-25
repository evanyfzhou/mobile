import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';

class ConfirmScreen extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <Modal isVisible={true} animationIn="slideInUp" animationOut="slideOutDown">
        <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ color: 'black', padding: 20 }}>Hello {name}!</Text>
            <Text style={{ color: 'black', padding: 20 }}>Please confirm the following information is correct by pressing the continue button:</Text>
            <Text style={{ color: 'black' }}>Email: {email}</Text>
            <Text style={{ color: 'black' }}>Phone: {phone}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title="Go Back" onPress={this.props.onGoBack} />
              <Button title="Continue" onPress={this.props.onContinue} />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ConfirmScreen;
