/**
 * List.js - Generic List Rendering Component
 *
 * This component renders an array of strings as a styled list.
 * Used for displaying meal ingredients and cooking steps in the meal details screen.
 *
 * Features:
 * - Maps through array data to create list items
 * - Consistent styling for all list items
 * - Rounded containers with background color
 * - Proper spacing and margins
 *
 * Props:
 * - data: Array of strings to display as list items
 *
 * @component
 * @param {Object} props - Component props
 * @param {string[]} props.data - Array of strings to render as list items
 * @returns {JSX.Element[]} Array of styled list item components
 */

import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  // Map through data array to create list items
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.container}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

/**
 * StyleSheet for List component
 *
 * Defines styles for:
 * - Container styling with rounded corners and background
 * - Text styling with proper alignment and color
 * - Spacing and padding for list items
 */
const styles = StyleSheet.create({
  container: {
    borderRadius: 6, // Rounded corners for list items
    paddingHorizontal: 8, // Horizontal padding inside items
    paddingVertical: 4, // Vertical padding inside items
    marginVertical: 4, // Vertical margin between items
    marginHorizontal: 12, // Horizontal margin from container edges
    backgroundColor: "#e2b497", // Light brown background color
  },
  itemText: {
    color: "#351401", // Dark brown text color
    textAlign: "center", // Center-aligned text
  },
});

export default List;
