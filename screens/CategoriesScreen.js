/**
 * CategoriesScreen.js - Main Categories Display Screen
 *
 * This screen displays all available meal categories in a grid layout.
 * Users can tap on any category to navigate to meals within that category.
 *
 * Features:
 * - Grid layout with 2 columns
 * - Color-coded category tiles
 * - Navigation to MealOverview screen with category data
 * - Receives navigation prop from React Navigation
 *
 * Navigation:
 * - Navigates to: MealOverview (with categoryId and categoryTitle params)
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.navigation - React Navigation object for screen navigation
 * @returns {JSX.Element} Categories screen with grid of category tiles
 */

import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  /**
   * Renders individual category item for FlatList
   * Creates a pressable tile with category information
   *
   * @param {Object} itemData - FlatList item data
   * @param {Object} itemData.item - Category object containing id, title, and color
   * @returns {JSX.Element} CategoryGridTile component
   */
  function renderCategoryItem(itemData) {
    /**
     * Handles category tile press
     * Navigates to MealOverview screen with category parameters
     */
    function pressHandler() {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  // Render FlatList with category data in 2-column grid
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

// Styles object (currently empty but available for future styling)
const styles = StyleSheet.create({});

export default CategoriesScreen;
