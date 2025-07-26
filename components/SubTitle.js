/**
 * SubTitle.js - Section SubTitle Component
 *
 * This component renders styled section subtitles used throughout the app.
 * Primarily used in meal details screen to separate ingredients and steps sections.
 *
 * Features:
 * - Consistent styling across the app
 * - Bottom border for visual separation
 * - Centered text alignment
 * - Theme-appropriate colors
 *
 * Props:
 * - title: The subtitle text to display
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The subtitle text to display
 * @returns {JSX.Element} Styled subtitle text component
 */

import { Text, StyleSheet } from "react-native";

function SubTitle({ title }) {
  return <Text style={styles.subtitle}>{title}</Text>;
}

/**
 * StyleSheet for SubTitle component
 *
 * Defines styles for:
 * - Text color and font styling
 * - Alignment and spacing
 * - Bottom border for visual separation
 */
const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497", // Light brown color for subtitle
    fontSize: 18, // Medium font size
    fontWeight: "bold", // Bold text for emphasis
    marginHorizontal: 12, // Horizontal margins
    padding: 6, // Internal padding
    textAlign: "center", // Center-aligned text
    borderBottomColor: "#e2b497", // Border color matching text
    borderBottomWidth: 2, // Bottom border width
    marginVertical: 12, // Vertical margins for spacing
  },
});

export default SubTitle;
