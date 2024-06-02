import { Colors } from "@/app/ui/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  field: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.helloFreshGreyLight,
    height: 30,
    marginTop: 15,
  },
  inputFocused: {
    borderBottomColor: Colors.h,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexGrow: 1,
    marginTop: 20,
  },
  button: {
    paddingHorizontal: 15,
    height: 36,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.helloFreshDarkLemonLime,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.helloFreshWhite,
  },
  errorMessage: {
    paddingVertical: 10,
    fontWeight: "bold",
    color: Colors.helloFreshRed,
  },
});
