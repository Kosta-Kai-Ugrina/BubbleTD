import React from "react";
import { View } from "react-native";
import RechargePack from "./RechargePack";

export default function RechargePackList({ elements = [] }) {
  return (
    <View>
      {elements.map((rechargePack, index) => (
        <RechargePack
          key={`rechargePack${index}`}
          position={rechargePack.position}
        />
      ))}
    </View>
  );
}
