import React from "react";
import { View } from "react-native";

  import { styles} from './styles';

const TaskInput = () => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskTitleContainer}>
        <Text style={styles.titleTask}>TITLE</Text>
      </View>
      <View style={styles.boxTask}>
        <Text style={styles.task}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei
          usmod tempor incididunt ut labore et dolore magna
        </Text>
      </View>
    </View>
  );
};

export default TaskInput;
