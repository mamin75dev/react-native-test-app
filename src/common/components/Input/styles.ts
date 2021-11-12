import { StyleSheet } from "react-native";
import { height, width } from "../../../utils/responsive";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: width * 0.9,
    borderRadius: width * 0.02,
    overflow: 'hidden',
    paddingVertical: height * 0.008,
    paddingHorizontal: width * 0.02,
    marginVertical: height * 0.01,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    marginTop: height * 0.01
  },
  error: {
    color: colors.red,
    alignSelf: 'flex-start',
    marginLeft: width * 0.07,
    fontWeight: "bold",
    fontSize: 14,
  }
})