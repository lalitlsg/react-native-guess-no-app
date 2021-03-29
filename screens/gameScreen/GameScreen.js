import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Number from "../../components/Number";
import Colors from "../../constants/Colors";

const generateNumberBetween = (min, max, excludeNumber) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  //to generate random no between min & max
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === excludeNumber) {
    generateNumberBetween(min, max, excludeNumber);
  }
  return randomNumber;
};

const GameScreen = ({ userChoice }) => {
  const [opponentGuess, setOpponentGuess] = useState(
    generateNumberBetween(1, 100, userChoice)
  );
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.title}>Opponents's Guess</Text>
        <Number selectedNumber={opponentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            buttonText="Lower"
            color={Colors.success}
            style={{ elevation: 3 }}
          />
          <Button
            buttonText="Greater"
            color={Colors.success}
            style={{ elevation: 3 }}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    width: 370,
    height: 220,
    marginTop: 20,
    backgroundColor: Colors.basic,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 10,
  },
  title: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    marginVertical: 30,
  },
});

export default GameScreen;
