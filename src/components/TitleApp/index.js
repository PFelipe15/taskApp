import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

function TitleApp({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default TitleApp;
