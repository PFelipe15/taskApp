import React, { useEffect } from "react";

import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View } from "react-native";
const IconInput = ({ name, size, color }) => {
  return (
    <View>
      <AntDesign name={name} size={size} color={color} /> 
    </View>
  );
};

export default IconInput;
