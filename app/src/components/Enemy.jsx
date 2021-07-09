import React from "react";
import { View, Text } from "react-native";

export default function Enemy({ position, size }) {
  return (
    <View
      style={{
        top: position[1],
        left: position[0],
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "black",
      }}
    ></View>
  );
}
