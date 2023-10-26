import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ appName }) {
  return (
    <View>
      <Text style={styles.header}>Welcome to {appName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    borderWidth: 3,
    fontSize: 25,
    fontWeight: "bold",
    padding: 5,
  },
});
