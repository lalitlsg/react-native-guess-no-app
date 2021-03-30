import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Number from "../../components/Number";
import RaisedButton from "../../components/RaisedButton";

const GameOverScreen = ({ guessRounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.gameOverContainer}>
          <Text>Game Over In</Text>
          <Number selectedNumber={guessRounds} />
          <Text>Rounds</Text>
          <Text>Number was {userNumber}</Text>
        </View>
        <RaisedButton label="RESTART" onPress={onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 350,
    justifyContent: "space-between",
  },
  gameOverContainer: {
    height: 150,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default GameOverScreen;
