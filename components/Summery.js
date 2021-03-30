import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";
import NumberContext from "../contexts/NumberContext";
import Button from "./Button";
import Card from "./Card";
import Number from "./Number";
import RaisedButton from "./RaisedButton";

const Summery = ({ selectedNumber }) => {
  const onNumberEntered = useContext(NumberContext);

  return (
    <Card style={styles.summeryCardStyles}>
      <Text style={styles.startText}>You Choose</Text>
      <View>
        <Number selectedNumber={selectedNumber} />
      </View>
      <RaisedButton
        onPress={() => onNumberEntered(selectedNumber)}
        label="START GAME"
      />
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
});

export default Summery;
