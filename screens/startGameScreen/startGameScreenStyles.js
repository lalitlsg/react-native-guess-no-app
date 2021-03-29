import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardContainer: {
    width: 370,
    height: 220,
    marginTop: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    padding: 10,
  },
  textInput: {
    height: 50,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 15,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default styles;
