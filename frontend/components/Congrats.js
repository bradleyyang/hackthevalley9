import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Congrats = () => {
  const navigation = useNavigation();
  const plusImage = require("./images/plus.png");

  return (
    <View style={styles.overlay}>
      <View style={styles.content}>
        <View style={styles.textUpper}>
          <Text style={styles.congratulations}>Congratulations!</Text>
          <Text style={styles.youEarnedANewFoodBadge}>
            <Text style={styles.whiteText}>You earned a </Text>
            <Text style={styles.newFoodText}>NEW FOOD</Text>
            <Text style={styles.whiteText}> badge!</Text>
          </Text>
        </View>
        <View style={styles.badge}>
          <View style={styles.badgeBorder} />
          <View style={styles.badgeImageStandIn} />
        </View>
        <Text style={styles.badgeCriteriaCopy}>New Food Lv. 1</Text>
      </View>
      <View style={styles.flexboxForSpaceLower} />
      <View style={styles.bottomBar}>
        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("./images/plus.png")}
            style={styles.cancelImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    padding: 24,
    backgroundColor: "#77AD8C", // Use solid color for background
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    alignSelf: "stretch",
    height: 435,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 32,
  },
  textUpper: {
    alignSelf: "stretch",
    height: 173,
    paddingTop: 96,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  congratulations: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "white",
    fontSize: 32,
    fontFamily: "Caros", // Ensure the font is linked properly in your project
    fontWeight: "500",
    wordWrap: "break-word",
  },
  youEarnedANewFoodBadge: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 32,
    fontFamily: "Caros",
    fontWeight: "500",
  },
  newFoodText: {
    color: "#FFBF00",
    fontSize: 32,
    fontFamily: "Caros",
    fontWeight: "500",
  },
  badge: {
    width: 168,
    height: 168,
    position: "relative",
    backgroundColor: "white",
    borderRadius: 84,
    marginTop: 54,
  },
  badgeBorder: {
    width: 168,
    height: 168,
    position: "absolute",
    backgroundColor: "#E4C1F9",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 84, // Ensures the border is rounded
  },
  badgeImageStandIn: {
    width: 140,
    height: 140,
    position: "absolute",
    backgroundColor: "#D9D9D9",
    borderRadius: 70, // Half of its size for circular shape
    left: 14,
    top: 14,
  },
  badgeCriteriaCopy: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "Caros",
    fontWeight: "400",
    wordWrap: "break-word",
  },
  flexboxForSpaceLower: {
    width: 345,
    height: 213,
    position: "relative",
  },
  bottomBar: {
    width: 393,
    flexDirection: "row",
    justifyContent: "center", // Center the cancel button
    alignItems: "center",
  },
  cancelButton: {
    width: 48,
    height: 48,
    backgroundColor: "#F59393",
    borderRadius: 24,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelImage: {
    width: 24,
    height: 24,
    transform: [{ rotate: "45deg" }],
  },
});

export default Congrats;
