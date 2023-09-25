import React from 'react';
import { View, Text, TextInput } from 'react-native';

function EmailInput({ value, onChange, isError }) {
  // Define the error message within the component
  const errorMessage = 'Please enter a valid email address';

  return (
    <View>
      <Text>Email address</Text>
      <TextInput
        style={{ borderBottomWidth: 1 }}
        value={value}
        onChangeText={onChange}
      />
      <Text style={{ color: isError ? 'grey' : 'white' }}>{errorMessage}</Text>
    </View>
  );
}

export default EmailInput;
