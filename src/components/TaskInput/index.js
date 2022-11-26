import React, { useEffect } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const TaskInput = ({ title, task }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.btnTask}>
      <View style={styles.taskTitleContainer}>
        <Text style={styles.titleTask}>{title}</Text>
      </View>

        <View style={styles.boxTask}>
          <Text numberOfLines={3} style={styles.task}>
            {task}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;
