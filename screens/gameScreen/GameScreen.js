import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../../components/AppText";
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

const renderList = (listLength, value) => (
  <View key={value} style={styles.listItemContainer}>
    <AppText>#{listLength - value.index}</AppText>
    <AppText>{value.item}</AppText>
  </View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateNumberBetween(1, 100, userChoice);
  const [opponentGuess, setOpponentGuess] = useState(initialGuess);
  const [currentGuesses, setCurrentGuesses] = useState([
    initialGuess.toString(),
  ]);
  const currentLow = useRef(0);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (opponentGuess === userChoice) {
      onGameOver(currentGuesses.length);
    }
  }, [opponentGuess]);

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
      currentLow.current = opponentGuess + 1;
    }

    const nextGuess = generateNumberBetween(
      currentLow.current,
      currentHigh.current,
      opponentGuess
    );
    setOpponentGuess(nextGuess);
    setCurrentGuesses((prevGuess) => [nextGuess.toString(), ...prevGuess]);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <AppText style={styles.title}>Opponents's Guess</AppText>
        <Number selectedNumber={opponentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            buttonText={<Ionicons name="remove" size={24} color="black" />}
            color={Colors.success}
            style={{ elevation: 3 }}
            clickHandler={() => nextGuessHandler("lower")}
          />
          <Button
            buttonText={<Ionicons name="add" size={24} color="black" />}
            color={Colors.success}
            style={{ elevation: 3 }}
            clickHandler={() => nextGuessHandler("greater")}
          />
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {currentGuesses.map((item, index) =>
            renderList(item, currentGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={currentGuesses}
          renderItem={renderList.bind(this, currentGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
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
  listContainer: {
    flex: 1,
    width: 350,
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  listItemContainer: {
    padding: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default GameScreen;
