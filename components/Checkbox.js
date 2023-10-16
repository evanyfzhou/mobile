import React from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';

function CheckboxComponent({ isChecked, onChange }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Checkbox
        value={isChecked}
        onValueChange={onChange}
        style={{ marginRight: 8 }} // Adjust styling as needed
      />
      <Text>I am not a robot</Text>
    </View>
  );
}

export default CheckboxComponent;
