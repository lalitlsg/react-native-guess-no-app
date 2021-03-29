import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    maxWidth: "90%",
    elevation: 15,
    borderRadius: 3,
  },
});

export default Card;
