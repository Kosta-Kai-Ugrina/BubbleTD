import React from "react";
import { View, Image } from "react-native";

export default function MrBubble({ position, size }) {
  return (
    <View
      style={{
        left: position[0] - size / 2,
        top: position[1] - size / 2,
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: "#6cf",
        borderColor: "black",
        borderWidth: 4,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/happyFace.png")}
        style={{
          width: size / 2,
          height: size / 2,
          left: 1,
          bottom: size / 6,
        }}
      />
    </View>
  );
}
