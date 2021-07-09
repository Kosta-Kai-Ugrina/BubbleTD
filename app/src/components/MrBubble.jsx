import React from "react";
import { View, Text } from "react-native";

export default function MrBubble({ position, size }) {
  return (
    <View
      style={{
        left: position[0] - size / 2,
        top: position[1] - size / 2,
        alignSelf: "center",
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "#6cf",
        borderColor: "black",
        borderWidth: 5,
        borderRadius: size / 2,
      }}
    ></View>
  );
}
