import React from "react";
import { View, Text } from "react-native";

export default function MrBubble({ position, size }) {
  return (
    <View
      style={{
        top: position[1],
        left: position[0],
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "blue",
        borderRadius: size / 2,
      }}
    ></View>
  );
}
