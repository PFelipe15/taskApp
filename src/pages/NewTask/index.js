import React from "react";
import { Text, View, StatusBar, Input } from "react-native";
import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
 

export default function NewTask() {
  return (
    <View style={styles.Container}>
      <StatusBar />
      <TitleApp title="Criar Tarefa"/>
      <View style={styles.main}>
         
      </View>
    </View>
  );
}
