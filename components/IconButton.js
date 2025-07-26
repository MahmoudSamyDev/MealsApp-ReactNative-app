/**
 * IconButton.js - Reusable Icon Button Component
 *
 * This component creates a pressable button with an Ionicons icon.
 * Used throughout the app for interactive icon elements, especially in headers.
 *
 * Features:
 * - Customizable icon from Ionicons library
 * - Configurable color and press handlers
 * - Press state visual feedback
 * - Optimized for header navigation buttons
 *
 * Props:
 * - icon: Ionicons icon name (e.g., 'star', 'star-outline')
 * - color: Icon color
 * - onPress: Function called when button is pressed
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.icon - Ionicons icon name
 * @param {string} props.color - Color of the icon
 * @param {Function} props.onPress - Function called when button is pressed
 * @returns {JSX.Element} Pressable icon button component
 */

import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed} // Apply pressed style when active
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={24}
        color={color}
        style={styles.iconStyling}
      />
    </Pressable>
  );
}

/**
 * StyleSheet for IconButton component
 *
 * Defines styles for:
 * - Pressed state opacity effect
 * - Icon positioning and margins
 */
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7, // Reduce opacity when pressed for visual feedback
  },
  iconStyling: {
    marginRight: 25, // Right margin for header positioning
  },
});

export default IconButton;
