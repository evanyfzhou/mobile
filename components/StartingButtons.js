import React from 'react';
import { View, Button } from 'react-native';

function StartingButtons({ onReset, onStart, isStartDisabled }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Button title="Reset" onPress={onReset} />
      <Button title="Start" onPress={onStart} disabled={isStartDisabled} />
    </View>
  );
}

export default StartingButtons;

