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
<<<<<<< Updated upstream
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
=======
import Congrats from "./components/Congrats";
>>>>>>> Stashed changes

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
<<<<<<< Updated upstream
      <Stack.Navigator initialRouteName="LandingPage">
=======
      <Stack.Navigator initialRouteName="Congrats">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
=======
          name="Congrats"
          component={Congrats}
>>>>>>> Stashed changes
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
