import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Summery from "../../components/Summery";
import Colors from "../../constants/Colors";
import styles from "./startGameScreenStyles";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    let inputNumber = parseInt(enteredValue);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid Number !", "Number should be in between 1 to 99", [
        { text: "ok", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(inputNumber);
    setEnteredValue("");
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = <Summery selectedNumber={selectedNumber} />;
  }
  <Text>Choosen Number : {selectedNumber}</Text>;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Card style={styles.cardContainer}>
          <Text style={styles.title}>Start a new game!</Text>
          <Input
            style={styles.textInput}
            placeholder="Enter Number"
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              buttonText="Reset"
              clickHandler={resetHandler}
              color={Colors.accent}
            />
            <Button
              buttonText="Confirm"
              clickHandler={confirmHandler}
              color={Colors.success}
            />
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
