import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const ClosetScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.closetScreen}>
      {/* Top Menu Bar */}
      <View style={styles.topMenuBar}>
        {/* Undo and Redo Buttons */}
        <View style={styles.undoRedo}>
          <View style={styles.button}>
            <View style={styles.vectorUndo}></View>
          </View>
          <View style={styles.button}>
            <View style={styles.vectorRedo}></View>
          </View>
        </View>

        {/* Unlocks */}
        <View style={styles.unlocks}>
          <View style={styles.unlockContent}>
            <Text style={styles.unlockText}>12</Text>
            <View style={styles.unlockIcon}>
              <View style={styles.vector}></View>
            </View>
          </View>
        </View>
      </View>

      {/* Avatar Placeholder */}
      <View style={styles.avatarStandIn}></View>

      {/* Closet Items Layout */}
      <View style={styles.closetItems}>
        <View style={styles.card}>
          <View style={styles.itemImageStandIn}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.itemImageStandIn}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.itemImageStandIn}></View>
        </View>
        <View style={styles.card}>
          <View style={styles.itemImageStandIn}></View>
        </View>
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
    backgroundColor: "white",
  },
  vectorRedo: {
    width: 16.71,
    height: 16,
    backgroundColor: "white",
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
    backgroundColor: "black",
  },
  avatarStandIn: {
    width: 224,
    height: 296,
    backgroundColor: "#D9D9D9",
  },
  closetItems: {
    display: "flex",
    alignSelf: "stretch",
    width: "345",
    height: "345",
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
    backgroundColor: "#D9D9D9",
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
