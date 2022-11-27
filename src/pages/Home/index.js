import React from "react";
import {
  Text,
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
import TaskInput from "../../components/TaskInput";
import { taskDb } from "../../components/config/db";

export default function Home() {
  return (
    <View style={styles.Container}>
      <StatusBar />
      <TitleApp title={"ULTIMAS TAREFAS"} />
        <View style={styles.main}>
      <ScrollView>
          {taskDb.map((task) => (
            <TaskInput
              key={task.id}
              title={task.title}
              task={task.description}
            />
          ))}
      </ScrollView>
        </View>
    </View>
  );
}
