import { FlatList, Text } from "react-native";
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from "../data/dummy-data";

const Categories = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <CategoryTile
      title={item.title}
      color={item.color}
      onPress={() => navigation.navigate("MealsOverview")}
    />
  );

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default Categories;
