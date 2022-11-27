import React from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
import { useState } from "react";
import IconInput from "../../components/Icons";
import { taskDb } from "../../components/config/db";

export default function NewTask() {
  const [task, seTask] = useState(taskDb);

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
              placeholderTextColor={"rgba(0,0,0,0.5)"}
            ></TextInput>
          </View>

          <View style={styles.labelTask}>
            <Text style={styles.title}>Faça sua Anotação:</Text>
            <TextInput
              multiline={true}
              style={styles.inputTask}
              placeholder="Digite Aqui sua anotação..."
              placeholderTextColor={"rgba(0,0,0,0.5)"}
            ></TextInput>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnStyle} onPress={()=>{console.log(task.map)}}>
              <Text style={styles.titleButton}>NOVO LEMBRETE</Text>
              <IconInput name="pluscircle" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
