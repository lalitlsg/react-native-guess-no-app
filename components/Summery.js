import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";
import Card from "./Card";
import Number from "./Number";

const Summery = ({ selectedNumber }) => {
  return (
    <Card style={styles.summeryCardStyles}>
      <Text style={styles.startText}>You Choose</Text>
      <View>
        <Number selectedNumber={selectedNumber} />
      </View>
      <TouchableNativeFeedback>
        <View style={styles.startButton}>
          <Text style={styles.startText}>START GAME</Text>
        </View>
      </TouchableNativeFeedback>
    </Card>
  );
};

const styles = StyleSheet.create({
  summeryCardStyles: {
    height: 120,
    marginTop: 20,
    alignItems: "center",
    backgroundColor: Colors.basic,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 370,
  },
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

export default Summery;
