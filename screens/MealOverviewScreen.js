/**
 * MealOverviewScreen.js - Category Meals Display Screen
 *
 * This screen displays all meals that belong to a selected category.
 * It receives the categoryId from navigation params and filters meals accordingly.
 *
 * Features:
 * - Filters meals based on selected category
 * - Uses MealsList component for consistent meal display
 * - Passes navigation to child components
 *
 * Navigation:
 * - Receives: categoryId from route params
 * - Navigates to: MealDetails (via MealsList component)
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.route - React Navigation route object containing params
 * @param {Object} props.route.params - Route parameters
 * @param {string} props.route.params.categoryId - ID of the selected category
 * @param {Object} props.navigation - React Navigation object for screen navigation
 * @returns {JSX.Element} Screen displaying meals for selected category
 */

import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

function MealOverviewScreen({ route, navigation }) {
  // Extract category ID from navigation parameters
  const categoryId = route.params.categoryId;

  // Filter meals to show only those belonging to the selected category
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // Render MealsList component with filtered meals and navigation
  return <MealsList items={displayedMeals} navigation={navigation} />;
}

// Styles object (currently empty but available for future styling)
const styles = StyleSheet.create();

export default MealOverviewScreen;
