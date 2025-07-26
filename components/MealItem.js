/**
 * MealItem.js - Individual Meal Display Component
 *
 * This component renders a single meal item in a card layout.
 * Used in meal lists to display meal information with image, title, and details.
 *
 * Features:
 * - Card-based layout with shadow/elevation
 * - Meal image display
 * - Meal title and details integration
 * - Pressable with visual feedback
 * - Cross-platform styling (Android/iOS)
 *
 * Props:
 * - title: Meal name
 * - imageUrl: URL for meal image
 * - duration: Cooking time in minutes
 * - complexity: Difficulty level
 * - affordability: Cost level
 * - onPress: Function called when item is pressed
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Name of the meal
 * @param {string} props.imageUrl - URL of the meal image
 * @param {number} props.duration - Cooking duration in minutes
 * @param {string} props.complexity - Complexity level of the meal
 * @param {string} props.affordability - Affordability level of the meal
 * @param {Function} props.onPress - Function called when meal item is pressed
 * @returns {JSX.Element} Meal item card component
 */

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import MealDetails from "../components/MealDetails";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }} // Android ripple effect
        style={({ pressed }) => pressed && styles.buttonPressed} // iOS press effect
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

/**
 * StyleSheet for MealItem component
 *
 * Defines styles for:
 * - Card layout with shadows and elevation
 * - Image display and sizing
 * - Title text formatting
 * - Container structure and borders
 * - Press state visual feedback
 */
const styles = StyleSheet.create({
  mealItem: {
    margin: 16, // Space around each meal item
    borderRadius: 8, // Rounded corners
    backgroundColor: "white", // White background for card
    elevation: 4, // Android shadow
    shadowColor: "black", // iOS shadow color
    shadowOpacity: 0.35, // iOS shadow opacity
    shadowOffset: { width: 0, heigh: 2 }, // iOS shadow offset (typo preserved)
    shadowRadius: 16, // iOS shadow blur radius
    overflow: Platform.OS === "android" ? "hidden" : "visible", // Handle ripple overflow
  },
  innerContainer: {
    borderRadius: 8, // Match outer border radius
    overflow: "hidden", // Clip content to rounded corners
  },
  image: {
    width: "100%", // Full width image
    height: 200, // Fixed height for consistency
  },
  title: {
    fontWeight: "bold",
    textAlign: "center", // Center-aligned title
    fontSize: 18,
    margin: 8, // Margin around title
  },
  buttonPressed: {
    opacity: 0.5, // Pressed state for iOS
  },
});

export default MealItem;
