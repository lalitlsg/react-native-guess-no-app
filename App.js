import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import NumberContext from "./contexts/NumberContext";
import GameOverScreen from "./screens/gameOverScreen/GameOverScreen";
import GameScreen from "./screens/gameScreen/GameScreen";
import StartGameScreen from "./screens/startGameScreen/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded] = useFonts({
    "roboto-font": require("./assets/fonts/Roboto.ttf"),
  });

  if (!dataLoaded) {
    return <AppLoading />;
  }

  const restartHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const userNumberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  const gameOverHandler = (noOfRounds) => {
    setGuessRounds(noOfRounds);
  };

  let content = <StartGameScreen />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
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
