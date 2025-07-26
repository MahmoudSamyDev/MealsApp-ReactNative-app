/**
 * favourite-context.js - Global Favourite Meals State Management
 *
 * This file provides React Context for managing favourite meals throughout the app.
 * Uses Context API for global state management without external libraries.
 *
 * Features:
 * - Global favourite meals state
 * - Add/remove favourite functionality
 * - Context provider for component tree
 * - Type-safe context creation with default values
 *
 * Context Values:
 * - ids: Array of favourite meal IDs
 * - addFavourite: Function to add a meal to favourites
 * - removeFavourite: Function to remove a meal from favourites
 *
 * @module FavouriteContext
 */

import { createContext } from "react";
import { useState } from "react";

/**
 * FavouriteContext - React Context for favourite meals
 *
 * Created with default values for type safety and development.
 * Provides structure for favourite meals management.
 */
export const FavouriteContext = createContext({
  ids: [], // Array of favourite meal IDs
  addFavourite: (id) => {}, // Function to add meal to favourites
  removeFavourite: (id) => {}, // Function to remove meal from favourites
});

/**
 * FavouriteContextProvider - Context Provider Component
 *
 * Wraps the application to provide favourite meals state and functions
 * to all child components through React Context.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} Context provider with favourite meals functionality
 */
function FavouriteContextProvider({ children }) {
  // State to store array of favourite meal IDs
  const [favMealIds, setFavMealIds] = useState([]);

  /**
   * Adds a new meal to favourites
   *
   * @param {string} id - The ID of the meal to add to favourites
   */
  function addNewMeal(id) {
    setFavMealIds((prev) => [...prev, id]);
  }

  /**
   * Removes a meal from favourites
   *
   * @param {string} id - The ID of the meal to remove from favourites
   */
  function removeCurrentMeal(id) {
    setFavMealIds((prev) => prev.filter((mealId) => mealId !== id));
  }

  // Context value object containing state and functions
  const value = {
    ids: favMealIds,
    addFavourite: addNewMeal,
    removeFavourite: removeCurrentMeal,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
