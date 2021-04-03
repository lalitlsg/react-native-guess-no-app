import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import AppText from "./AppText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <AppText style={styles.headerTitle}>{title}</AppText>
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
  },
});

export default Header;
