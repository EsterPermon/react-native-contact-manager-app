import { Colors } from "@/app/ui/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    alignSelf: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
});
