/**
 * MealsList.js - Meals List Display Component
 *
 * This component renders a list of meals using FlatList for performance.
 * Used in both MealOverviewScreen and FavouriteScreen to display meals consistently.
 *
 * Features:
 * - FlatList implementation for efficient rendering
 * - Navigation integration for meal detail navigation
 * - Reusable across different screens
 * - Proper key extraction for list items
 *
 * Props:
 * - items: Array of meal objects to display
 * - navigation: Navigation object for screen transitions
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object[]} props.items - Array of meal objects to render
 * @param {Object} props.navigation - React Navigation object for navigation
 * @returns {JSX.Element} FlatList component with meal items
 */

import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsList({ items, navigation }) {
  /**
   * Renders individual meal item for FlatList
   * Creates MealItem component with navigation handler
   *
   * @param {Object} itemData - FlatList item data
   * @param {Object} itemData.item - Meal object with all meal properties
   * @returns {JSX.Element} MealItem component
   */
  function renderMealItem(itemData) {
    /**
     * Handles meal item press
     * Navigates to MealDetails screen with meal ID
     */
    function pressHandler() {
      navigation.navigate("MealDetails", {
        mealId: itemData.item.id,
      });
    }

    // Extract meal properties for MealItem component
    const MealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return <MealItem {...MealItemProps} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id} // Use meal ID as unique key
        renderItem={renderMealItem}
      />
    </View>
  );
}

/**
 * StyleSheet for MealsList component
 *
 * Defines styles for:
 * - Container layout with padding
 * - Full height layout for FlatList
 */
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up full available space
    padding: 16, // Padding around the list
  },
});

export default MealsList;
