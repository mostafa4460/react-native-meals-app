import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Meal from "./Meal";

const MealsList = ({ data }) => {
  const navigation = useNavigation();

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

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
