import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import AppText from "./AppText";

const RaisedButton = (props) => {
  return (
    <TouchableNativeFeedback {...props}>
      <View style={styles.startButton}>
        <AppText style={styles.startText}>{props.label}</AppText>
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
