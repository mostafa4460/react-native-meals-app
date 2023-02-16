import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Screen
            name="MealsCategories"
            component={Categories}
            options={{ title: "All Categories" }}
          />
          <Screen name="MealsOverview" component={MealsOverview} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
