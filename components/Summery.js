import React, { useContext } from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/Colors";
import NumberContext from "../contexts/NumberContext";
import AppText from "./AppText";
import Card from "./Card";
import Number from "./Number";
import RaisedButton from "./RaisedButton";

const Summery = ({ selectedNumber }) => {
  const onNumberEntered = useContext(NumberContext);

  return (
    <Card style={styles.summeryCardStyles}>
      <AppText style={styles.startText}>You Choose</AppText>
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
