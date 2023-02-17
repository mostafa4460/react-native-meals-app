import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

const Meal = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <View style={styles.mealOuterContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.mealPressed : null)}
        onPress={onPress}
      >
        <View style={styles.mealInnerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  mealOuterContainer: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  mealInnerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
});
