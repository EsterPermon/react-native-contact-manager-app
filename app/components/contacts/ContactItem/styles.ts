import { Colors } from "@/app/ui/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    padding: 15,
    borderColor: Colors.helloFreshDarkLemonLime,
    borderWidth: 1,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  image: {
    marginRight: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  label: {
    fontSize: 16,
  },
});
