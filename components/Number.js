import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const Number = ({ selectedNumber }) => {
  return (
    <View style={styles.numberContainer}>
      <AppText style={styles.numberText}>{selectedNumber}</AppText>
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
