import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // Define the icons array directly in HomeScreen
  const icons = [
    {
      source: require("./assets/collection.png"),
      size: 48,
      borderRadius: 24,
      onPress: () => navigation.navigate("Collection"), // Navigate to CollectionScreen
    },
    {
      source: require("./assets/plus.png"),
      size: 48,
      borderRadius: 24,
      onPress: () => navigation.navigate("LogFood"), // Navigate to LogFoodScreen
    },
    {
      source: require("./assets/closet.png"),
      size: 48,
      borderRadius: 24,
      onPress: () => navigation.navigate("Closet"), // Navigate to ClosetScreen
    },
  ];

  const IconButton = ({ source, size, borderRadius, onPress }) => (
    <TouchableOpacity
      style={[styles.iconButton, { width: size, height: size, borderRadius }]}
      onPress={onPress} // Trigger onPress when the button is clicked
    >
      <View style={styles.iconContainer}>
        <Image resizeMode="contain" source={source} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heroTextAnimal}>
        <View style={styles.heroText}>
          <View style={styles.textWrapper}>
            <Text style={styles.goodMorningText}>Good morning</Text>
            <Text style={styles.nameText}>XXXXX!</Text>
          </View>
        </View>
        <View style={styles.avatarBg}>
          <View style={styles.avatarStandIn}></View>
          <View style={styles.floorBehindThe}></View>
        </View>
      </View>
      <View style={styles.floorResponsive}></View>

      {/* Icon Button Group Rendered Directly Here */}
      <View style={styles.iconButtonGroup}>
        {icons.map((icon, index) => (
          <IconButton key={index} {...icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    backgroundColor: "#F2EDE2", // Background color for the whole screen
  },
  heroTextAnimal: {
    flexDirection: "column",
    alignItems: "center",
    gap: 48,
    paddingTop: 48,
    alignSelf: "stretch",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  heroText: {
    paddingTop: "96",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    position: "relative",
  },
  textWrapper: {
    width: "fit-content", // Adjusted to fit text content
    paddingTop: 80,
  },
  goodMorningText: {
    fontFamily: "Caros-Bold",
    fontWeight: "700",
    color: "#F694C1",
    fontSize: 45,
  },
  nameText: {
    fontFamily: "Caros-Bold",
    fontWeight: "700",
    color: "#F694C1",
    fontSize: 45,
    textAlign: "center",
  },
  avatarBg: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: -24,
    marginRight: -24,
    backgroundColor: "#ffffff",
  },
  avatarStandIn: {
    width: 256,
    height: 344,
    backgroundColor: "#D9D9D9",
    zIndex: 2,
  },
  floorBehindThe: {
    position: "absolute", // Make floorBehindThe absolute
    bottom: 0, // Align it to the bottom of the parent container
    width: "100%",
    height: 50,
    backgroundColor: "#F3EEE2",
    zIndex: 1, // Make sure it is behind the avatar
  },
  floorResponsive: {
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    backgroundColor: "#F3EEE2",
  },
  iconButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3EEE2",
    display: "flex",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
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
});

export default HomeScreen;
