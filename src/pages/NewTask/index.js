import React from "react";
import { Text, View, StatusBar, Input, TextInput } from "react-native";
import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
import { useState } from "react";

export default function NewTask() {
  const [title, seTitle] = useState("");
  const [task, seTask] = useState("");
  const [date, seDate] = useState(Date.now());
  return (
    <View style={styles.Container}>
      <StatusBar />
      <TitleApp title="CRIAR TAREFA" />

      <View style={styles.main}>
        <View style={styles.taskContainer}>
          <View style={styles.labelTitle}>
            <Text style={styles.title}>Escolha um Titulo:</Text>
            <TextInput
              style={styles.inputTitle}
              placeholder="EX: Jantar com os amigos"
            ></TextInput>
          </View>

          <View style={styles.labelTask}>
            <Text style={styles.title}>Faça sua Anotação:</Text>
            <TextInput
              style={styles.inputTask}
              placeholder="Digite Aqui sua anotação..."
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}
