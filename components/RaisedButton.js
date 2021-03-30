import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const RaisedButton = (props) => {
  return (
    <TouchableNativeFeedback {...props}>
      <View style={styles.startButton}>
        <Text style={styles.startText}>{props.label}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  startButton: {
    width: 100,
    height: 100,
    backgroundColor: "#4dff4d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    elevation: 5,
  },
  startText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default RaisedButton;
