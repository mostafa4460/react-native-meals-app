import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import Favorites from "./screens/Favorites";
import FavoritesProvider from "./store/context/favorites-context";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();
const { Navigator: DrawerNavigator, Screen: DrawerScreen } =
  createDrawerNavigator();

const Drawer = () => (
  <DrawerNavigator
    screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1",
      drawerInactiveTintColor: "white",
    }}
  >
    <DrawerScreen
      name="MealsCategories"
      component={Categories}
      options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}
    />
    <DrawerScreen
      name="Favorites"
      component={Favorites}
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}
    />
  </DrawerNavigator>
);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesProvider>
        <NavigationContainer>
          <StackNavigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <StackScreen
              name="Drawer"
              component={Drawer}
              options={{ headerShown: false }}
            />
            <StackScreen name="MealsOverview" component={MealsOverview} />
            <StackScreen
              name="MealsDetails"
              component={MealDetails}
              options={{ title: "About the Meal" }}
            />
          </StackNavigator>
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
