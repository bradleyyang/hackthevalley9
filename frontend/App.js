// App.js
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HomeScreen from "./HomeScreen";
import ClosetScreen from "./ClosetScreen";
import CollectionScreen from "./CollectionScreen";
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
