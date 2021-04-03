import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../../components/AppText";
import Number from "../../components/Number";
import RaisedButton from "../../components/RaisedButton";

const GameOverScreen = ({ guessRounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.gameOverContainer}>
          <AppText>Game Over In</AppText>
          <Number selectedNumber={guessRounds} />
          <AppText>Rounds</AppText>
          <AppText>Number was {userNumber}</AppText>
        </View>
        <Image
          source={require("../../assets/images/over.jpg")}
          style={styles.image}
        />
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
    alignItems: "center",
  },
  gameOverContainer: {
    height: 150,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default GameOverScreen;
