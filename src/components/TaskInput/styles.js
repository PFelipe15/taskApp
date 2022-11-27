import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "column",
    height: 137,
    marginTop: 40,
  },
  btnTask: {
    display: "flex",
    width: "100%",
  },

  btnDelete: {
    alignItems: "flex-end",
    paddingHorizontal: 15,
  },

  taskTitleContainer: {
    width: "100%",
    maxWidth: "50%",
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
