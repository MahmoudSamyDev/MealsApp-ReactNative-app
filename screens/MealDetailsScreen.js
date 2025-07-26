/**
 * MealDetailsScreen.js - Detailed Meal Information Screen
 *
 * This screen displays comprehensive information about a selected meal including:
 * - Meal image, title, and basic details (duration, complexity, affordability)
 * - Complete ingredients list
 * - Step-by-step cooking instructions
 * - Favourite toggle functionality in header
 *
 * Features:
 * - Scrollable content for long ingredient lists and instructions
 * - Dynamic header button that changes based on favourite status
 * - Context integration for favourite meals management
 * - Responsive layout with proper spacing and styling
 *
 * Navigation:
 * - Receives: mealId from route params
 * - Header: Star/outline icon for favourite toggle
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.route - React Navigation route object containing params
 * @param {Object} props.route.params - Route parameters
 * @param {string} props.route.params.mealId - ID of the selected meal
 * @param {Object} props.navigation - React Navigation object for screen navigation
 * @returns {JSX.Element} Detailed meal information screen
 */

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLayoutEffect, useContext, useCallback } from "react";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import List from "../components/List";
import SubTitle from "../components/SubTitle";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/favourite-context";

function MealDetailsScreen({ route, navigation }) {
  // Get favourite context for managing meal favourite status
  const favMealsCTX = useContext(FavouriteContext);

  // Extract meal ID from navigation parameters
  const mealId = route.params.mealId;

  // Find the selected meal from MEALS data array
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // Check if current meal is marked as favourite
  const mealIsFav = favMealsCTX.ids.includes(mealId);

  /**
   * Toggles the favourite status of the current meal
   * Uses useCallback to prevent unnecessary re-renders
   */
  const changeFavMealStatus = useCallback(() => {
    if (mealIsFav) {
      favMealsCTX.removeFavourite(mealId);
    } else {
      favMealsCTX.addFavourite(mealId);
    }
  }, [mealIsFav, mealId, favMealsCTX]);

  /**
   * Sets up the header right button with favourite toggle
   * Updates when meal favourite status changes
   */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFav ? "star" : "star-outline"}
            color="white"
            onPress={changeFavMealStatus}
          />
        );
      },
    });
  }, [navigation, mealIsFav]);

  // Render scrollable meal details view
  return (
    <ScrollView style={styles.rootView}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        style={{ color: "white" }}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle title="Ingredients" />
          <List data={selectedMeal.ingredients} />
          <SubTitle title="Steps" />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

/**
 * StyleSheet for MealDetailsScreen component
 *
 * Defines styles for:
 * - Root view with bottom margin
 * - Full-width meal image
 * - Centered meal title with white text
 * - Detail text styling
 * - List container layout and positioning
 */
const styles = StyleSheet.create({
  rootView: {
    marginBottom: 32, // Bottom margin for content spacing
  },
  image: {
    width: "100%", // Full width image
    height: 350, // Fixed height for meal image
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white", // White text for dark theme
  },
  detailText: {
    color: "white", // White text for meal details
  },
  listOuterContainer: {
    alignItems: "center", // Center the list container
  },
  listContainer: {
    width: "80%", // 80% width for better readability
    // height removed to allow dynamic content sizing
  },
});

export default MealDetailsScreen;
