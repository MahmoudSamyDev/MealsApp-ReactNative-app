/**
 * meal.js - Meal Model Class
 *
 * This file defines the Meal class used to create meal objects
 * throughout the application. Each meal contains comprehensive information
 * including cooking details, dietary restrictions, and instructions.
 *
 * Properties:
 * - id: Unique identifier for the meal
 * - categoryIds: Array of category IDs this meal belongs to
 * - title: Display name of the meal
 * - affordability: Cost level (affordable, pricey, luxurious)
 * - complexity: Difficulty level (simple, challenging, hard)
 * - imageUrl: URL of the meal's image
 * - duration: Cooking time in minutes
 * - ingredients: Array of ingredient strings
 * - steps: Array of cooking instruction strings
 * - isGlutenFree: Boolean indicating if meal is gluten-free
 * - isVegan: Boolean indicating if meal is vegan
 * - isVegetarian: Boolean indicating if meal is vegetarian
 * - isLactoseFree: Boolean indicating if meal is lactose-free
 *
 * @class Meal
 */

/**
 * Meal Class
 *
 * Represents a complete meal with all its properties, cooking instructions,
 * and dietary information. Used throughout the app to display meal details.
 *
 * @param {string} id - Unique identifier for the meal
 * @param {string[]} categoryIds - Array of category IDs this meal belongs to
 * @param {string} title - Display name of the meal
 * @param {string} affordability - Cost level (affordable, pricey, luxurious)
 * @param {string} complexity - Difficulty level (simple, challenging, hard)
 * @param {string} imageUrl - URL of the meal's image
 * @param {number} duration - Cooking time in minutes
 * @param {string[]} ingredients - Array of ingredient descriptions
 * @param {string[]} steps - Array of cooking instruction steps
 * @param {boolean} isGlutenFree - Whether the meal is gluten-free
 * @param {boolean} isVegan - Whether the meal is vegan
 * @param {boolean} isVegetarian - Whether the meal is vegetarian
 * @param {boolean} isLactoseFree - Whether the meal is lactose-free
 */
class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
