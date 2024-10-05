import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
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
      <View style={styles.bottomBar}>
        <View style={styles.imgWrapper}>
          <Image
            source={require("./assets/collection.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.imgWrapper}>
          <Image source={require("./assets/plus.png")} style={styles.img} />
        </View>
        <View style={styles.imgWrapper}>
          <Image source={require("./assets/closet.png")} style={styles.img} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to fill available space
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
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
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    position: "relative",
  },
  textWrapper: {
    width: "fit-content", // Adjusted to fit text content
    marginTop: -1,
  },
  goodMorningText: {
    fontFamily: "Caros-Bold",
    fontWeight: "700",
    color: "#F694C1",
    fontSize: 36,
  },
  nameText: {
    fontFamily: "Caros-Bold",
    fontWeight: "700",
    color: "#F694C1",
    fontSize: 36,
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
  },
  floorBehindThe: {
    width: 393,
    height: 48,
    marginTop: -48,
    backgroundColor: "#F2EDE2",
  },
  floorResponsive: {
    flex: 1,
    alignSelf: "stretch",
    width: "100%",
    backgroundColor: "#F2EDE2",
  },
  bottomBar: {
    flexDirection: "row", // Arrange icons horizontally
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 24,
    width: "100%",
  },
  imgWrapper: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    backgroundColor: "#E4C1F9",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000",
  },
  img: {
    width: 32, // Set the width of the images
    height: 32, // Set the height of the images
  },
});

export default HomeScreen;
