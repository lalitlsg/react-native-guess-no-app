import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
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

  const currentLow = useRef(0);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && opponentGuess < userChoice) ||
      (direction === "greater" && opponentGuess > userChoice)
    ) {
      Alert.alert("Wrong Hint", "Please give correct hint", [
        { text: "ok", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = opponentGuess;
    } else {
      currentLow.current = opponentGuess;
    }

    const nextGuess = generateNumberBetween(
      currentLow.current,
      currentHigh.current,
      opponentGuess
    );
    setOpponentGuess(nextGuess);
  };

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
            clickHandler={() => nextGuessHandler("lower")}
          />
          <Button
            buttonText="Greater"
            color={Colors.success}
            style={{ elevation: 3 }}
            clickHandler={() => nextGuessHandler("greater")}
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
