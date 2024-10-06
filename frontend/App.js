// App.js
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import ClosetScreen from "./components/ClosetScreen";
import CollectionScreen from "./components/CollectionScreen";
import LogFoodScreen from "./components/LogFoodScreen";
import Register from "./components/Register";
import BadgeDesc from "./components/BadgeDesc";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Congrats from "./components/Congrats";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="LandingPage">
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
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BadgeDesc"
          component={BadgeDesc}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
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
