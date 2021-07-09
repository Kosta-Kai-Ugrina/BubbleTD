import React, { useRef, useState } from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";

import Constants from "../Constants";
import GameLoop from "../GameLoop";

import MrBubble from "../components/MrBubble";
import EnemyList from "../components/EnemyList";

export default function GameScreen() {
  const { width, height } = useWindowDimensions();
  const engine = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <GameEngine
        ref={engine}
        style={styles.gameContainer}
        entities={{
          mrBubble: {
            size: 100,
            position: [
              (Constants.MAX_WIDTH - Constants.MARGIN_HORIZONTAL * 2) / 2,
              (Constants.MAX_HEIGHT - Constants.MARGIN_VERTICAL * 2) / 2,
            ],
            renderer: <MrBubble />,
          },
          enemyList: {
            elements: [],
            enemySpeed: Constants.ENEMY_SPEED_START,
            moveCounter: Constants.ENEMY_SPEED_START,
            renderer: <EnemyList />,
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
  gameContainer: {
    width: Constants.MAX_WIDTH - Constants.MARGIN_HORIZONTAL * 2,
    height: Constants.MAX_HEIGHT - Constants.MARGIN_VERTICAL * 2,
    flex: null,
    backgroundColor: "#09f",
    borderWidth: 10,
    borderColor: "#28f",
    borderRadius: 30,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
});
