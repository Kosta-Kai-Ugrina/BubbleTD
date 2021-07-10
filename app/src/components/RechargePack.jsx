import React from "react";
import { Image, View } from "react-native";
import Constants from "../Constants";

export default function RechargePack({ position }) {
  return (
    <View
      style={{
        top: position[1],
        left: position[0],
        position: "absolute",
        width: Constants.ENEMY_SIZE,
        height: Constants.ENEMY_SIZE,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
        borderRadius: Constants.ENEMY_SIZE / 2,
        borderColor: "orange",
        borderWidth: 2,
      }}
    />
  );
}
