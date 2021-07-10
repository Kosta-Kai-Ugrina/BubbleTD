import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import MrBubble from "../components/MrBubble";
import Constants from "../Constants";

export default function HomeScreen({ onPlayClick, onTutorialClick }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title]}>Mr. Bubble</Text>
      <View>
        <MrBubble
          position={[0, 0]}
          // position={[
          //   (Constants.MAX_WIDTH - Constants.MARGIN_HORIZONTAL * 2) / 2,
          //   Constants.MAX_HEIGHT / 2,
          // ]}
          size={200}
        />
      </View>
      <TouchableOpacity onPressOut={onPlayClick}>
        <Text style={[styles.title, { fontSize: 30, top: 50 }]}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressOut={onTutorialClick}>
        <Text style={[styles.title, { fontSize: 30 }]}>How do I play?</Text>
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
  img: {},
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
});
