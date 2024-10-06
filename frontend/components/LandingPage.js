// LandingPage.js

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App</Text>
      <Text style={styles.subtitle}>
        Join us today to explore our amazing features!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color="#007BFF"
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="#28A745"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 16,
  },
});

export default LandingPage;
