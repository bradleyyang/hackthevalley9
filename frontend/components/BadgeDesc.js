import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BadgeDesc = () => {
  const navigation = useNavigation();
  const plusImage = require("./images/plus.png"); // Image for the cancel button

  return (
    <View style={styles.badgeCollection}>
      <View style={styles.frame32}>
        <View style={styles.frame30}>
          <Text style={styles.newFoodTitle}>New Food Lv. 1</Text>
          <Text style={styles.description}>You tried 1 new food item!</Text>
        </View>

        <View style={styles.mainBadge}>
          <View style={[styles.badgeBorder, getMainBadgeBorderColor()]} />
          <View style={styles.badgeImageStandIn} />
        </View>

        <View style={styles.frame31}>
          {Array.from({ length: 4 }).map((_, index) => (
            <View key={index} style={styles.smallBadge}>
              <View
                style={[
                  styles.badgeBorderSmall,
                  index % 2 === 0
                    ? getSmallBadgeBorderColor()
                    : getSmallBadgeBorderColorGray(),
                ]}
              />
              <View style={styles.badgeImageStandInSmall} />
            </View>
          ))}
        </View>
      </View>

      {/* Bottom Bar with Cancel Button */}
      <View style={styles.bottomBar}>
        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={plusImage} style={styles.cancelImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Function to get main badge border color
const getMainBadgeBorderColor = () => {
  return {
    backgroundColor: "#E4C1F9",
    borderWidth: 1,
    borderColor: "black",
  };
};

// Function to get small badge border color
const getSmallBadgeBorderColor = () => {
  return {
    backgroundColor: "#E4C1F9",
    borderWidth: 1,
    borderColor: "black",
  };
};

const getSmallBadgeBorderColorGray = () => {
  return {
    backgroundColor: "#E1E1E1",
    borderWidth: 1,
    borderColor: "black",
  };
};

const styles = StyleSheet.create({
  badgeCollection: {
    width: 393,
    height: 852,
    paddingTop: 72,
    paddingBottom: 24,
    backgroundColor: "#ECF8FD",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frame32: {
    alignSelf: "stretch",
    height: 408,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 48,
  },
  frame30: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  newFoodTitle: {
    textAlign: "center",
    color: "black",
    fontSize: 36,
    fontWeight: "500",
    paddingTop: 24,
  },
  description: {
    textAlign: "center",
    color: "black",
    fontSize: 24,
    fontWeight: "400",
  },
  mainBadge: {
    width: 168,
    height: 168,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 84,
  },
  badgeBorder: {
    width: 168,
    height: 168,
    position: "absolute",
    borderRadius: 84,
  },
  badgeImageStandIn: {
    width: 140,
    height: 140,
    position: "absolute",
    left: 14,
    top: 14,
    backgroundColor: "#D9D9D9",
    borderRadius: 70, // Half of its size for circular shape
  },
  frame31: {
    alignSelf: "stretch",
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  smallBadge: {
    width: 72,
    height: 72,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 48,
  },
  badgeBorderSmall: {
    width: 72,
    height: 72,
    position: "absolute",
    borderRadius: 36, // Half of its size for circular shape
  },
  badgeBorderSmallGray: {
    width: 72,
    height: 72,
    position: "absolute",
    borderRadius: 36, // Half of its size for circular shape
  },
  badgeImageStandInSmall: {
    width: 60,
    height: 60,
    position: "absolute",
    left: 6,
    top: 6,
    backgroundColor: "#D9D9D9",
    borderRadius: 30, // Half of its size for circular shape
  },
  bottomBar: {
    width: "100%", // Ensures it takes full width
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    flexDirection: "row", // Horizontal layout to center items
  },
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
  cancelImage: {
    width: 24,
    height: 24,
    transform: [{ rotate: "45deg" }], // Rotate the plus image to form an "X"
  },
});

export default BadgeDesc;
