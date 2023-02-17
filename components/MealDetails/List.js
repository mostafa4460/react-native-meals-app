import { Text, View, StyleSheet } from "react-native";

const List = ({ list }) =>
  list.map((listItem) => (
    <View key={listItem} style={styles.listItem}>
      <Text style={styles.itemText}>{listItem}</Text>
    </View>
  ));

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginVertical: 4,
    marginHorizontal: 30,
    backgroundColor: "#e2b497"
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  }
});
