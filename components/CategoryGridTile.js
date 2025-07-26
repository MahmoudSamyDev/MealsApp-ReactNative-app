/**
 * CategoryGridTile.js - Individual Category Display Component
 *
 * This component renders a single category tile for the categories grid.
 * Each tile displays the category title with its associated color as background.
 *
 * Features:
 * - Pressable tile with ripple effect on Android
 * - Custom background color for each category
 * - Responsive press states and visual feedback
 * - Shadow and elevation effects for depth
 * - Cross-platform compatibility (Android/iOS)
 *
 * Props:
 * - title: Category display name
 * - color: Background color for the tile
 * - onPress: Function to handle tile press events
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The category title to display
 * @param {string} props.color - The background color for the tile
 * @param {Function} props.onPress - Function called when tile is pressed
 * @returns {JSX.Element} Category tile component
 */

import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }} // Ripple effect for Android
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed && styles.buttonPressed, // iOS press effect
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

/**
 * StyleSheet for CategoryGridTile component
 *
 * Defines styles for:
 * - Grid item layout and spacing
 * - Shadow and elevation effects
 * - Button interactions and press states
 * - Inner container styling
 * - Title text formatting
 */
const styles = StyleSheet.create({
  gridItem: {
    flex: 1, // Flexible width for grid layout
    margin: 16, // Spacing between grid items
    height: 150, // Fixed height for uniform appearance
    borderRadius: 8, // Rounded corners
    elevation: 4, // Android shadow
    backgroundColor: "white", // Base background color
    shadowColor: "black", // iOS shadow color
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowOffset: { width: 0, heigh: 2 }, // iOS shadow offset (typo preserved from original)
    shadowRadius: 8, // iOS shadow blur radius
    overflow: Platform.OS === "android" ? "hidden" : "visible", // Handle ripple overflow
  },
  buttonStyle: {
    flex: 1, // Fill the grid item
  },
  buttonPressed: {
    opacity: 0.5, // Pressed state for iOS
  },
  innerContainer: {
    flex: 1,
    padding: 16, // Internal padding
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    borderRadius: 8, // Match outer border radius
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
