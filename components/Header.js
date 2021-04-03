import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Colors.basic,
    fontSize: 18,
    fontFamily: "roboto-font",
  },
});

export default Header;
