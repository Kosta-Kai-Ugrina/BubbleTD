import React, { useState } from "react";
import GameScreen from "./app/src/screens/Game";
import HomeScreen from "./app/src/screens/Home";

export default function App() {
  const [gameRunning, setGameRunning] = useState(false);

  return gameRunning ? (
    <GameScreen />
  ) : (
    <HomeScreen onPlayClick={() => setGameRunning(true)} />
  );
}
