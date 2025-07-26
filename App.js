/**
 * App.js - Main Application Entry Point
 *
 * This is the root component of the Meals App that sets up the navigation structure
 * combining React Navigation's Stack Navigator and Drawer Navigator.
 *
 * Features:
 * - Stack navigation for main flow (Categories -> Meals -> Details)
 * - Drawer navigation for side menu (Categories and Favourites)
 * - Global state management for favourites using Context API
 * - Consistent styling and theming across the app
 *
 * Navigation Structure:
 * Stack Navigator (Main)
 *   ├── Drawer Navigator (Home)
 *   │   ├── Categories Screen
 *   │   └── Favourites Screen
 *   ├── Meal Overview Screen
 *   └── Meal Details Screen
 *
 * @author Your Name
 * @version 1.0.0
 */

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { CATEGORIES } from "./data/dummy-data";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouriteContextProvider from "./store/context/favourite-context";

// Create navigator instances
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/**
 * DrawerNavigator Component
 *
 * Creates a drawer navigation with two main screens:
 * - Categories: Shows all meal categories
 * - Favourites: Shows user's favourite meals
 *
 * Features:
 * - Custom styling with consistent color theme
 * - Drawer icons using Ionicons
 * - Custom header and drawer background colors
 *
 * @returns {JSX.Element} Drawer Navigator component
 */
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

/**
 * Main App Component
 *
 * The root component that wraps the entire application with:
 * - Status bar configuration
 * - Favourite context provider for global state
 * - Navigation container with stack navigator
 *
 * Stack Navigation Structure:
 * 1. Drawer (headerShown: false) - Contains Categories and Favourites
 * 2. MealOverview - Shows meals for selected category
 * 3. MealDetails - Shows detailed meal information with favourite toggle
 *
 * @returns {JSX.Element} Main application component
 */
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              cardStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealOverview"
              component={MealOverviewScreen}
              options={({ route }) => {
                const categoryId = route.params.categoryId;
                const categoryTitle = CATEGORIES.find(
                  (category) => category.id === categoryId
                ).title;

                return {
                  title: categoryTitle,
                };
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: `About The Meal` }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}
