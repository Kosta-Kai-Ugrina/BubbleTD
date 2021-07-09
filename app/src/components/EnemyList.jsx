import React from "react";
import { View } from "react-native";
import Enemy from "./Enemy";

export default function EnemyList({ elements = [] }) {
  return (
    <View>
      {elements.map((enemy, index) => (
        <Enemy key={`enemy${index}`} position={enemy.position} />
      ))}
    </View>
  );
}
