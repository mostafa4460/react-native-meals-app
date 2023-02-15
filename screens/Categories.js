import { FlatList, Text } from "react-native";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

const Categories = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryTile title={item.title} color={item.color} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default Categories;
