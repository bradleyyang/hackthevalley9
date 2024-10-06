import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const BadgeCollection = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.collection}>
      <View style={styles.badgeDisplay}>
        {Array.from({ length: 15 }).map((_, index) => (
          <View key={index} style={styles.badge}>
            <View style={[styles.badgeBorder, getBadgeBorderColor(index)]} />
            <View style={styles.badgeImageStandIn} />
          </View>
        ))}
      </View>
      <View style={styles.bottomBar}>
        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("./images/plus.png")} style={styles.cancel} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Function to get badge border color
const getBadgeBorderColor = (index) => {
  const colors = [
    styles.badgeColor1.backgroundColor,
    styles.badgeColor2.backgroundColor,
    styles.badgeColor3.backgroundColor,
    styles.badgeColor4.backgroundColor,
    styles.badgeColor5.backgroundColor,
  ];
  return {
    backgroundColor: colors[index % colors.length],
  };
};

const styles = StyleSheet.create({
  collection: {
    width: 393,
    height: 852,
    paddingTop: 80,
    paddingBottom: 24,
    backgroundColor: "#F3EEE2",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badgeDisplay: {
    alignSelf: "stretch",
    flex: 1,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "flex-start", // Changed to ensure badges fill the area
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge: {
    width: 96,
    height: 96,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 48,
    margin: 9.5,
  },
  badgeBorder: {
    width: 96,
    height: 96,
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 48,
  },
  badgeImageStandIn: {
    width: 80,
    height: 80,
    position: "absolute",
    left: 8,
    top: 8,
    backgroundColor: "#D9D9D9",
    borderRadius: 40, // Half of its size for circular shape
    borderWidth: 1, // Inner border thickness
    borderColor: "black", // Inner border color
  },
  bottomBar: {
    width: 345,
    justifyContent: "center", // Center the cancel button horizontally
    alignItems: "center",
  },
  // Styles for the cancel button
  cancelButton: {
    width: 48,
    height: 48,
    backgroundColor: "#F59393",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  cancel: {
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }], // Rotate the plus image to form an "X"
  },
  vector: {
    width: 24,
    height: 24,
    transform: [{ rotate: "-45deg" }],
    backgroundColor: "white",
  },
  // Badge colors defined here
  badgeColor1: {
    backgroundColor: "#A9DEF9",
  },
  badgeColor2: {
    backgroundColor: "#D3F8E2",
  },
  badgeColor3: {
    backgroundColor: "#EDE7B1",
  },
  badgeColor4: {
    backgroundColor: "#E1E1E1",
  },
  badgeColor5: {
    backgroundColor: "#F694C1",
  },
});

export default BadgeCollection;
