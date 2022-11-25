import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

function TitleApp() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ULTIMAS TAREFAS</Text>
    </View>
  );
}

export default TitleApp;
