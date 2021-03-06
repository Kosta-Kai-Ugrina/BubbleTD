import React from "react";
import { Image, View } from "react-native";
import Constants from "../Constants";

export default function Enemy({ position }) {
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
        backgroundColor: "red",
      }}
    >
      <Image
        source={require("../../assets/angryFace.png")}
        style={{ width: Constants.ENEMY_SIZE, height: Constants.ENEMY_SIZE }}
      />
    </View>
  );
}
