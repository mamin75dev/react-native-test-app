import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1199ff',
    width: width * 0.9,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: height * 0.05,
    borderRadius: width * 0.02,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
})