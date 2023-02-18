import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import ExtraMealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

const MealDetails = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const {
    imageUrl,
    title,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
  } = selectedMeal;

  useLayoutEffect(() => {
    const handleHeaderBtnPress = () => navigation.navigate("Favorites");

    navigation.setOptions({
      headerRight: () => (
        <IconButton icon="star" color="white" onPress={handleHeaderBtnPress} />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />

      <Text style={styles.title}>{title}</Text>

      <ExtraMealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle text="Ingredients" />
          <List list={ingredients} />

          <Subtitle text="Steps" />
          <List list={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
