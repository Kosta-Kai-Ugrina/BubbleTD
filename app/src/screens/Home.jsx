import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ onPlayClick }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mr. Bubble</Text>
      <TouchableOpacity onPressOut={onPlayClick}>
        <Text style={[styles.title, { fontSize: 30 }]}>Play</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#27f",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
});
