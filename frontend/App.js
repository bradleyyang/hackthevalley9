// App.js
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import HomeScreen from "./HomeScreen"; // Adjust the import path based on your file structure

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
