import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import NumberContext from "./contexts/NumberContext";
import GameOverScreen from "./screens/gameOverScreen/GameOverScreen";
import GameScreen from "./screens/gameScreen/GameScreen";
import StartGameScreen from "./screens/startGameScreen/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const restartHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const userNumberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  const gameOverhandler = (noOfRounds) => {
    setGuessRounds(noOfRounds);
  };

  let content = <StartGameScreen />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverhandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNumber}
        onRestart={restartHandler}
      />
    );
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
