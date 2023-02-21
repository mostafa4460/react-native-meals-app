import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverview = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  /* like useEffect, but will run before JSX renders */
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList data={displayedMeals} />;
};

export default MealsOverview;
