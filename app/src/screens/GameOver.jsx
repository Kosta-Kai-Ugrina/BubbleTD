import Constants from "../Constants";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";

export default function GameOverScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, { fontSize: 60 }]}>Mr. Bubble is dead.</Text>
      <Image source={require("../../assets/death.png")} style={styles.img} />
      <Text style={styles.text}>
        His wife will spend the rest of her life alone. His child will have to
        grow up without a father. And it is all your fault.
      </Text>
      <Text style={styles.text}>
        And no, there is no "Play again" button. There is only one life, and now
        it's over. Mr. Bubble is dead. Forever.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#003",
  },
  img: { width: Constants.MAX_WIDTH * 0.8 },
  text: {
    color: "white",
    fontSize: 24,
    marginHorizontal: 30,
  },
});
