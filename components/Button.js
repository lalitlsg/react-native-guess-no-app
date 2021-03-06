import React from "react";
import { TouchableNativeFeedback, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const Button = ({ clickHandler, buttonText, color, style }) => {
  return (
    <TouchableNativeFeedback onPress={clickHandler}>
      <View style={{ ...styles.buttonStyles, borderColor: color, ...style }}>
        <AppText style={{ color: color }}>{buttonText}</AppText>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    width: 70,
    height: 30,
    backgroundColor: Colors.basic,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    elevation: 10,
    borderWidth: 1,
  },
});

export default Button;
