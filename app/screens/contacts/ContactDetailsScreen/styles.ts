import { Colors } from "@/app/ui/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.helloFreshWhite,
  },
  item: {
    fontSize: 16,
    paddingVertical: 10,
  },
  label: {
    fontWeight: "bold",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  alignOnMiddleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
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
