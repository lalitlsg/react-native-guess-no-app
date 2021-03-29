import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      blurOnSubmit
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.basic,
    borderRadius: 3,
  },
});

export default Input;
