import React, { useState } from "react";
import GameScreen from "./app/src/screens/Game";
import GameOverScreen from "./app/src/screens/GameOver";
import HomeScreen from "./app/src/screens/Home";
import TutorialScreen from "./app/src/screens/Tutorial";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [inTutorial, setInTutorial] = useState(false);

  return inTutorial ? (
    <TutorialScreen onBack={() => setInTutorial(false)} />
  ) : gameRunning ? (
    <GameScreen
      onGameEnd={() => {
        setGameOver(true);
        setGameRunning(false);
      }}
    />
  ) : gameOver ? (
    <GameOverScreen />
  ) : (
    <HomeScreen
      onPlayClick={() => setGameRunning(true)}
      onTutorialClick={() => setInTutorial(true)}
    />
  );
}
