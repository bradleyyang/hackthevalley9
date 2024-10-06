import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Bites for Badges</Text>
      <Text style={styles.subtitle}>
        Discover New Foods, Earn Rewards, Celebrate Growth!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBEE", // Very light pink background
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#E57373", // Light red for the title
    textShadowColor: "#FFABAB", // Lighter pink shadow for the title
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#AD1457", // Dark pink for readability
  },
  buttonContainer: {
    width: "100%",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#EF9A9A", // Light red button color
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingPage;