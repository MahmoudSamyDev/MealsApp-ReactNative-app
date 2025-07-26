/**
 * MealDetails.js - Meal Information Display Component
 *
 * This component displays basic meal information in a horizontal layout.
 * Shows duration, complexity, and affordability with consistent formatting.
 *
 * Features:
 * - Horizontal layout for meal metadata
 * - Customizable styling through props
 * - Reusable across different screens
 * - Uppercase formatting for complexity and affordability
 *
 * Props:
 * - duration: Cooking time in minutes
 * - complexity: Difficulty level (simple, challenging, hard)
 * - affordability: Cost level (affordable, pricey, luxurious)
 * - style: Optional container style override
 * - textStyle: Optional text style override
 *
 * @component
 * @param {Object} props - Component props
 * @param {number} props.duration - Cooking duration in minutes
 * @param {string} props.complexity - Complexity level of the meal
 * @param {string} props.affordability - Affordability level of the meal
 * @param {Object} [props.style] - Optional style object for container
 * @param {Object} [props.textStyle] - Optional style object for text elements
 * @returns {JSX.Element} Horizontal meal details component
 */

import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

/**
 * StyleSheet for MealDetails component
 *
 * Defines styles for:
 * - Container layout with horizontal flexbox
 * - Text styling with margins and font size
 * - Centered alignment for details
 */
const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4, // Space between detail items
    fontSize: 12, // Small font size for metadata
  },
  details: {
    flexDirection: "row", // Horizontal layout
    alignItems: "center", // Center items vertically
    justifyContent: "center", // Center items horizontally
    padding: 8, // Internal padding
  },
});

export default MealDetails;
