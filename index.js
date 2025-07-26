/**
 * index.js - Application Entry Point
 *
 * This is the main entry point for the React Native application.
 * It registers the root component with Expo's registerRootComponent function.
 *
 * This file ensures that the app works correctly in both:
 * - Expo Go development environment
 * - Native builds (standalone apps)
 *
 * The registerRootComponent function internally calls:
 * AppRegistry.registerComponent('main', () => App)
 *
 * @module Index
 */

import { registerRootComponent } from "expo";

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
