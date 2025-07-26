/**
 * category.js - Category Model Class
 *
 * This file defines the Category class used to create category objects
 * throughout the application. Each category represents a type of cuisine
 * or meal grouping.
 *
 * Properties:
 * - id: Unique identifier for the category
 * - title: Display name of the category
 * - color: Background color for the category tile
 *
 * @class Category
 */

/**
 * Category Class
 *
 * Represents a meal category with identification, display name, and visual styling.
 * Used to organize meals into different cuisine types or categories.
 *
 * @param {string} id - Unique identifier for the category
 * @param {string} title - Display name of the category (e.g., "Italian", "Asian")
 * @param {string} color - Hex color code for the category's visual representation
 */
class Category {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
