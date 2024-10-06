// App.js
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import ClosetScreen from "./ClosetScreen";
import CollectionScreen from "./CollectionScreen";
import LogFoodScreen from "./LogFoodScreen";
import Register from "./components/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogFood"
          component={LogFoodScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Collection"
          component={CollectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Closet"
          component={ClosetScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
