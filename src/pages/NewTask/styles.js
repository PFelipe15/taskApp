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
    display: "flex",
    width: "100%",
    height: 400,
    paddingHorizontal: 15,
  },

  labelTitle: {
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
    maxWidth: "80%",
    height: 80,
  },
  title: {
    fontSize: 25,
    color: "#fff",
    marginBottom: 10,
  },
  inputTitle: {
    width: 340,
    height: 35,
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    paddingLeft: 8,
    borderRadius: 15,
  },

  labelTask: {
    width: "100%",
    maxWidth: "99%",
    height: 145,
  },

  inputTask: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    borderRadius: 15,
    paddingLeft: 8,
  },

  btnContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },

  btnStyle: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: 150,
    height: 60,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    fontWeight: "bold",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-around",
  },

  titleButton: {
    fontSize: 14,
    alignItems: "center",
    color: "#fff",
  },
});

export { styles };
