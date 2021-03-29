import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import NumberContext from "./contexts/NumberContext";
import GameScreen from "./screens/gameScreen/GameScreen";
import StartGameScreen from "./screens/startGameScreen/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const userNumberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  let content = <StartGameScreen />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <NumberContext.Provider value={userNumberHandler}>
      <View style={styles.container}>
        <Header title="Guess a Number" />
        {content}
        <StatusBar style="auto" />
      </View>
    </NumberContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
