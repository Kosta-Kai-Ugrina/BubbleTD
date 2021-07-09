import React, { useRef, useState } from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Constants from "../Constants";
import GameLoop from "../GameLoop";

import Enemy from "../components/Enemy";
import MrBubble from "../components/MrBubble";

export default function GameScreen() {
  const { width, height } = useWindowDimensions();
  const engine = useRef(null);
  const [enemySpeed, setEnemySpeed] = useState(5);

  return (
    <SafeAreaView style={styles.container}>
      <GameEngine
        ref={engine}
        style={{
          width: width - Constants.MARGIN_HORIZONTAL * 2,
          height: height - Constants.MARGIN_VERTICAL * 2,
          flex: null,
          backgroundColor: "#09f",
          borderWidth: 10,
          borderColor: "#28f",
          borderRadius: 30,
        }}
        entities={{
          mrBubble: {
            size: 100,
            position: [
              width / 2 - Constants.MARGIN_HORIZONTAL,
              height / 2 - Constants.MARGIN_VERTICAL,
            ],
            updateFrequency: 10,
            nextMove: 10,
            xspeed: 1,
            yspeed: 1,
            renderer: <MrBubble />,
          },
        }}
        systems={[GameLoop]}
        running={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27f",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
});
