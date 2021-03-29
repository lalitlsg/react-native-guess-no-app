import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

const Number = ({ selectedNumber }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{selectedNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.basic,
    elevation: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 20,
  },
});

export default Number;
