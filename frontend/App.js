// App.js
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HomeScreen from "./HomeScreen";
import CollectionScreen from "./CollectionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CollectionScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
