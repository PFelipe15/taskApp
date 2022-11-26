import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "column",
    height: 137,
    marginTop: 40,
  },
  btnTask: {
    display: "flex",
    width: "100%",
  },

  taskTitleContainer: {
    width: "100%",
    maxWidth: "100%",
    height: 35,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 14,
    marginBottom: 3,
    paddingHorizontal: 8,
  },

  titleTask: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  boxTask: {
    height: 120,
    width: 390,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 15,
    justifyContent: "center",
  },

  task: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 3,
  },
});

export { styles };
