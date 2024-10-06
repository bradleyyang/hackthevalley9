import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BadgeCollection = () => {
  // Define the icons array
  const icons = [
    { source: require("./assets/collection.png"), size: 48, borderRadius: 24 },
    { source: require("./assets/plus.png"), size: 48, borderRadius: 24 },
    { source: require("./assets/closet.png"), size: 48, borderRadius: 24 },
  ];

  // IconButton Component
  const IconButton = ({ source, size, borderRadius }) => (
    <View
      style={[styles.iconButton, { width: size, height: size, borderRadius }]}
    >
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={source} style={styles.icon} />
      </View>
    </View>
  );

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
        {/* Icon Button Group Rendered Here */}
        <View style={styles.iconButtonGroup}>
          {icons.map((icon, index) => (
            <IconButton key={index} {...icon} />
          ))}
        </View>
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
    paddingTop: 48,
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3EEE2",
    width: "100%",
    paddingBottom: 24,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#E4C1F9",
  },
  iconContainer: {
    display: "flex",
    width: 32,
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "center",
  },
  icon: {
    width: "70%",
    height: "70%",
    aspectRatio: 1,
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
