import React from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";
import Constants from "../Constants";

export default function TutorialLine({ imgSrc, text }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={imgSrc}
        style={{
          width: Constants.MAX_WIDTH * 0.3,
          height: 100,
          marginRight: 10,
        }}
      />
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 70,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
