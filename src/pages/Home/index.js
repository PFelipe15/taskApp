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

export default function Home() {
  return (
    <View style={styles.Container}>
      <StatusBar />
      <TitleApp title={"ULTIMAS TAREFAS"} />
      <View style={styles.main}>
        <TaskInput
          title={"TESTEgefrgergrfrwgreygrety"}
          task="Sunt ea ad culpa duis anim exercitation anim sint enim et Lorem. Fugiat consectetur proident fugiat nostrud ex proident aliqua irure amet mollit. Cupidatat occaecat sint aliqua deserunt qui occaecat culpa. "
        />

        <TaskInput
          title={"TESTE"}
          task="Sunt ea ad culpa duis anim exercitation anim sint enim et Lorem. Fugiat consectetur proident fugiat nostrud ex proident aliqua irure amet mollit. Cupidatat occaecat sint aliqua deserunt qui occaecat culpa. "
        />

        <TaskInput
          title={"TESTE"}
          task="Sunt ea ad culpa duis anim exercitation anim sint enim et Lorem. Fugiat consectetur proident fugiat nostrud ex proident aliqua irure amet mollit. Cupidatat occaecat sint aliqua deserunt qui occaecat culpa. "
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <Text style={styles.btnStyle}>Novo Lembrete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
