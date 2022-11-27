import React, { useEffect } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import IconInput from "../Icons";
import { styles } from "./styles";
import { taskDb } from "../config/db";
const TaskInput = ({ title, task, id }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskTitleContainer}>
        <Text numberOfLines={1} style={styles.titleTask}>{title}</Text>
      </View>

      <View style={styles.boxTask}>
        <Text numberOfLines={3} style={styles.task}>
          {task}
        </Text>
        <View style={styles.btnDeleteContainer}></View>
        <TouchableOpacity style={styles.btnDelete}>
          <IconInput name={"delete"} size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskInput;
