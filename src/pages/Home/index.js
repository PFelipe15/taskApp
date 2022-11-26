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
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();
  function setToNewTask() {
    navigation.navigate("NewTask");
  }
  return (
    <View style={styles.Container}>
      <StatusBar />
      <TitleApp title={"ULTIMAS TAREFAS"} />
      <View style={styles.main}>
        <TaskInput
          title={"TITULO"}
          task=" Minim labore enim ex ex. "
        />
      </View>
    </View>
  );
}
