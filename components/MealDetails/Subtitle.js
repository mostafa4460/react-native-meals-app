import { Text, View, StyleSheet } from "react-native";

const Subtitle = ({ text }) => (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{text}</Text>
  </View>
);

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 30,
    marginVertical: 4,
    padding: 6,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});