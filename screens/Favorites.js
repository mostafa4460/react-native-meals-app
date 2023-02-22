// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

const NoFavorites = () => (
  <View style={styles.rootContainer}>
    <Text style={styles.text}>You have no favorite meals yet.</Text>
  </View>
);

const Favorites = () => {
  // const { ids } = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  return favoriteMeals.length ? (
    <MealsList data={favoriteMeals} />
  ) : (
    <NoFavorites />
  );
};

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
