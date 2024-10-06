// App.js
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HomeScreen from "./components/HomeScreen";
import ClosetScreen from "./components/ClosetScreen";
import CollectionScreen from "./components/CollectionScreen";
import LogFoodScreen from "./LogFoodScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LogFoodScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
