import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";

const HomeScreen = ({ navigation, route }) => {

  const { userDetails } = route.params;
  const username = userDetails.username;

  console.log("fldksjfklsdjklfdsjklfjdsklfjlkds jflkdsjflkdsjf ", username);

  // Define the icons array directly in HomeScreen
  const icons = [
    {
      source: require("./images/collection.png"),
      size: 48,
      borderRadius: 24,
      onPress: () => navigation.navigate("Collection"), // Navigate to CollectionScreen
    },
    {
      source: require("./images/plus.png"),
      size: 48,
      borderRadius: 24,
      onPress: () => navigation.navigate("LogFood", {userDetails} ), // Navigate to LogFoodScreen
    },
    {
      source: require("./images/closet.png"),
      size: 48,
      borderRadius: 24,
      onPress: () => navigation.navigate("Closet"), // Navigate to ClosetScreen
    },
  ];




  const [explorerCount, setExplorerCount] = useState(0);
  const [foodieCount, setFoodieCount] = useState(0);
  const [masterChefCount, setMasterChefCount] = useState(0);
  const [healthyEaterCount, setHealthyEaterCount] = useState(0);
  const [foodConnoisseurCount, setFoodConnoisseurCount] = useState(0);
  const [error, setError] = useState(null);

  // Function to call your API
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:8080/badges', {
        "username": userDetails.username,
      });

      // Assuming response.data is an object with badge counts
      const badgeData = response.data;

      console.log(badgeData);

      // Set the counts for each badge
      setExplorerCount(badgeData.explorer || 0);
      setFoodieCount(badgeData.foodie || 0);
      setMasterChefCount(badgeData.masterChef || 0);
      setHealthyEaterCount(badgeData.healthyEater || 0);
      setFoodConnoisseurCount(badgeData.foodConnoisseur || 0);

      setError(null);
    } catch (err) {
      console.error(err);
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    // Call the API immediately when the component mounts
    fetchData();

    // Set up the interval to call the API periodically
    const intervalId = setInterval(fetchData, 5000); // Call every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [userDetails.username]);

  const badges = [
    { name: 'Explorer', count: explorerCount, condition: explorerCount >= 2 },
    { name: 'Foodie', count: foodieCount, condition: foodieCount >= 3 },
    { name: 'Master Chef', count: masterChefCount, condition: masterChefCount >= 4 },
    { name: 'Healthy Eater', count: healthyEaterCount, condition: healthyEaterCount >= 1 },
    { name: 'Food Connoisseur', count: foodConnoisseurCount, condition: foodConnoisseurCount >= 5 },
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

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 80,
          left: 15,
          padding: 5,
          backgroundColor: '#EAB8F1', // Light purple background
          borderRadius: 10, // Slightly increased border radius
          zIndex: 10, // Ensure it's on top
          shadowColor: '#000', // Shadow color
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3, // Shadow opacity
          shadowRadius: 4, // Shadow blur
          elevation: 5, // For Android shadow
        }}
        onPress={() => { navigation.goBack() }}
      >
        <Text style={{ color: '#5C4F9A', fontWeight: 'bold', fontSize: 16 }}>Sign Out</Text>
      </TouchableOpacity>

      <View style={styles.heroTextAnimal}>
        <View style={styles.heroText}>
          <View style={styles.textWrapper}>
            <Text style={styles.goodMorningText}>Good morning</Text>
            <Text style={styles.nameText}>{userDetails.username}!</Text>
          </View>
        </View>
        <View style={styles.avatarBg}>
          <Image
            source={require("./images/penguinbase.png")} // Load penguin.png as the avatar
            style={styles.avatarStandIn}
          />
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
      <Text style={{
        position: 'absolute',
        top: '70%',
        zIndex: 1,
        fontSize: 26, // Slightly larger font size
        color: '#FF6F61', // A warm coral color for vibrancy
        fontFamily: 'Arial', // A clean and modern font
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: '#000', // Adding a subtle shadow for contrast
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
      }}>
        Badges
      </Text>






      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.badgeScroll}
      >
        {badges.map((badge, index) =>
          badge.condition ? (
            <View key={index} style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{badge.name}</Text>
            </View>
          ) : null
        )}


      </ScrollView>










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
    resizeMode: "contain", // Ensure the image maintains aspect ratio
  },
  floorBehindThe: {
    position: "absolute", // Make floorBehindThe absolute
    bottom: 0, // Align it to the bottom of the parent container
    width: "100%",
    height: 50,
    backgroundColor: "#F3EEE2",
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
  goodMorningText: {
    fontSize: 34,                     // Larger font size for emphasis
    color: '#FFB74D',                 // Warm golden color
    fontWeight: '700',                // Bold font weight
    fontStyle: 'italic',              // Italic style for a friendly touch
    textAlign: 'center',              // Center the text
    textShadowColor: '#000',          // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 2,              // Shadow radius
    marginBottom: 10,                 // Spacing below the text
  },
  nameText: {
    fontSize: 30,                     // Larger font size for emphasis
    color: '#FF4081',                 // Bright pink color
    fontWeight: '700',                // Bold font weight
    fontStyle: 'italic',              // Italic style for a friendly touch
    textAlign: 'center',              // Center the text
    textShadowColor: '#000',          // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 2,              // Shadow radius
  },
  badgeScroll: {
    position: 'absolute',
    top: '75%', // Adjust position as needed
    zIndex: 1,
    width: '100%',
  },

  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  badgeText: {
    fontSize: 18,
    color: '#FF6F61', // Badge text color
    marginHorizontal: 10, // Space between badges
  },

});

export default HomeScreen;
