import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "column",
    height: 137,
    marginBottom: 60,
  },

  taskTitleContainer: {
    width: 200,
    height: 35,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 14,
    marginBottom: 3,
  },

  titleTask: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  boxTask: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: 120,
    width: "98%",
    borderRadius: 15,
    justifyContent: "center",
  },

  task: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});

export { styles };
