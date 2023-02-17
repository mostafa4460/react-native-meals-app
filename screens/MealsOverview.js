import { useLayoutEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Meal from "../components/Meal";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = ({ item }) => (
    <Meal
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      onPress={() => navigation.navigate("MealsDetails", { mealId: item.id })}
    />
  );

  /* like useEffect, but will run before JSX renders */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
