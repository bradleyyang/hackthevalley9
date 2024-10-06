//TODO (general): gray out everything initialy (change images to crayscale)
//TODO(4): once food submitted, change toque to be coloured
//TODO(5): data persistence for avatar on home screen with toque

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const ClosetScreen = () => {
  const navigation = useNavigation();

  // State to manage the current avatar image
  const [avatarImage, setAvatarImage] = useState(
    require("./images/penguinbase.png")
  );

  // Define the closet items array and corresponding avatar images
  const closetItems = [
    {
      image: require("./images/toque.png"),
      avatar: require("./images/penguintoque.png"),
    },
    {
      image: require("./images/bandana.png"),
      avatar: require("./images/penguinbandana.png"),
    },
    {
      image: require("./images/bow.png"),
      avatar: require("./images/penguinbow.png"),
    },
    {
      image: require("./images/vest.png"),
      avatar: require("./images/penguinvest.png"),
    },
  ];

  return (
    <View style={styles.closetScreen}>
      {/* Top Menu Bar */}
      <View style={styles.topMenuBar}>
        {/* Undo and Redo Buttons */}
        <View style={styles.undoRedo}>
          <View style={styles.button}>
            <Image
              source={require("./images/undo.png")} // Load undo.png
              style={styles.vectorUndo}
            />
          </View>
          <View style={styles.button}>
            <Image
              source={require("./images/redo.png")} // Load redo.png
              style={styles.vectorRedo}
            />
          </View>
        </View>

        {/* Unlocks */}
        <View style={styles.unlocks}>
          <View style={styles.unlockContent}>
            <Text style={styles.unlockText}>12</Text>
            <View style={styles.unlockIcon}>
              <Image
                source={require("./images/unlock.png")} // Load unlock.png
                style={styles.vector}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Avatar Placeholder with avatarImage state */}
      <Image
        source={avatarImage} // Use the current avatar image from state
        style={styles.avatarStandIn}
      />

      {/* Closet Items Layout */}
      <View style={styles.closetItems}>
        {closetItems.map((item, index) => (
          <TouchableOpacity
            style={styles.card}
            key={index}
            onPress={() => setAvatarImage(item.avatar)} // Update avatar on press
          >
            <Image source={item.image} style={styles.itemImageStandIn} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Bar with Cancel Button */}
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
  closetScreen: {
    width: "100%",
    height: "100%",
    paddingTop: 48,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: "#F3EEE2",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topMenuBar: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  undoRedo: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#F694C1",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  vectorUndo: {
    width: 16.69,
    height: 16,
  },
  vectorRedo: {
    width: 16.71,
    height: 16,
  },
  unlocks: {
    width: 61,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#A9DEF9",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  unlockContent: {
    width: 37,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  unlockText: {
    color: "black",
    fontSize: 16,
    fontFamily: "Caros",
    fontWeight: "400",
    lineHeight: 16,
  },
  unlockIcon: {
    width: 16,
    height: 16,
    position: "relative",
  },
  vector: {
    width: 13.33,
    height: 16,
    position: "absolute",
  },
  avatarStandIn: {
    width: 224,
    height: 296,
    resizeMode: "contain", // Ensure the image maintains aspect ratio
  },
  closetItems: {
    display: "flex",
    alignSelf: "stretch",
    width: 345,
    height: 345,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    rowGap: 24,
    flexWrap: "wrap",
    flexShrink: 0,
  },
  card: {
    width: 168,
    height: 168,
    padding: 24,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
  },
  itemImageStandIn: {
    width: 120,
    height: 120,
    resizeMode: "contain", // Ensure the image maintains aspect ratio
  },
  bottomBar: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
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

export default ClosetScreen;
