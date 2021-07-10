import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import TutorialLine from "../components/TutorialLine";

export default function TutorialScreen({ onBack }) {
  return (
    <SafeAreaView style={styles.container}>
      <TutorialLine
        imgSrc={require("../../assets/mrBubble.png")}
        text="This is Mr. Bubble. He likes to recycle and pay taxes. Everyone likes Mr. Bubble."
      />
      <TutorialLine
        imgSrc={require("../../assets/squareBois.png")}
        text="These are the Square Bois. They like to pop bubbles and not pay taxes. Your job is to keep them away from Mr. Bubble."
      />
      <TutorialLine
        imgSrc={require("../../assets/killSquareBois.png")}
        text="Use your finger to kill the Square Bois. Don't worry, no one will miss them."
      />
      <TutorialLine
        imgSrc={require("../../assets/shrink.png")}
        text="Mr. Bubble is a good-hearted bubble. Even the death of a Square Boi makes him sad and weak. Don't kill too much."
      />
      <TutorialLine
        imgSrc={require("../../assets/rechargePacks.png")}
        text="Yellow recharge packs spawn occasionally. Mr. Bubble likes recharge packs. Press on them to rejuvenate Mr. Bubble."
      />
      <TouchableOpacity onPressOut={onBack}>
        <Text style={styles.text}>OK, got it!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#35c",
  },
  text: {
    color: "white",
    fontSize: 30,
  },
});
