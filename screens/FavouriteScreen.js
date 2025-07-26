/**
 * FavouriteScreen.js - User's Favourite Meals Display Screen
 *
 * This screen displays all meals that the user has marked as favourites.
 * It integrates with the FavouriteContext to access the global favourite state.
 *
 * Features:
 * - Displays favourite meals using MealsList component
 * - Shows empty state message when no favourites exist
 * - Context integration for favourite meals management
 * - Navigation to meal details from meal list
 *
 * States:
 * - Empty: Shows "No Meals added to favourite yet" message
 * - Populated: Shows MealsList with favourite meals
 *
 * Navigation:
 * - Receives: navigation prop
 * - Navigates to: MealDetails (via MealsList component)
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.navigation - React Navigation object for screen navigation
 * @returns {JSX.Element} Favourite meals screen or empty state
 */

import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourite-context";
import MealsList from "../components/MealsList";

function FavouriteScreen({ navigation }) {
  // Get favourite context to access favourite meal IDs
  const FavMealsCTX = useContext(FavouriteContext);

  // Filter meals to show only favourite ones
  const displayedMeals = MEALS.filter((mealItem) =>
    FavMealsCTX.ids.includes(mealItem.id)
  );

  // Show empty state if no favourite meals exist
  if (!displayedMeals || displayedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>No Meals added to favourite yet</Text>
      </View>
    );
  }

  // Render MealsList component with favourite meals
  return <MealsList items={displayedMeals} navigation={navigation} />;
}

/**
 * StyleSheet for FavouriteScreen component
 *
 * Defines styles for:
 * - Root container with centered content
 * - Text styling for empty state message
 */
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white", // White text for dark theme
  },
});

export default FavouriteScreen;
