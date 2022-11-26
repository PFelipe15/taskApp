import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#4335f4",
  },

  main: {
    display: "flex",
    width: "100%",
    height: 583,
  },

  taskContainer: {
    width: "100%",
    height: 400,
    paddingHorizontal: 15,
  },

  labelTitle: {
    marginTop: 40,
    marginBottom: 40,
    width: "100%",
    maxWidth: "80%",
    height: 80,
  },
  title: {
    fontSize: 25,
  },
  inputTitle: {
    width: 340,
    height: 35,
    fontSize: 20,
    backgroundColor: "rgba(255,2555,255,0.8)",
    alignItems: "center",
    paddingLeft: 8,
    borderRadius: 15,
  },

  labelTask: {
    width: "100%",
    maxWidth: "99%",
    height: 80,
  },

  inputTask: {
    width: "100%",
    height: 120,
    fontSize: 20,
    backgroundColor: "rgba(255,2555,255,0.8)",
    alignItems: "center",

    borderRadius: 15,
    paddingLeft: 8,
  },
});

export { styles };
