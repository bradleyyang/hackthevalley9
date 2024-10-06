import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { dbRequest } from "../utils/dbRequest";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook











const LogFoodScreen = ({ route }) => {

  const { userDetails } = route.params;

  console.log("lkdfjslkfsdkljflkdsfjklds", userDetails.username);
  const navigation = useNavigation(); // Initialize navigation
  const [food, setFood] = useState("");
  const [successVisible, setSuccess] = useState(false);

  const onSubmitPress = async () => {
    setSuccess(true);
    setFood("");

    console.log(userDetails.username);
    
    try {
      const response = await axios.put('http://localhost:8080/logfood', {
        "username": userDetails.username,
      });
      console.log('Updated user:', response.data);


    } catch (error) {
      console.error('Error updating user:', error);

    }



  };

 

  return (
    <View style={styles.overlay}>
      <View style={styles.content}>
        <View style={styles.textUpper}>
          <Text style={styles.title}>Log a food!</Text>
        </View>
        <View style={styles.frame29}>
          <TextInput
            style={styles.textInputField}
            onChangeText={setFood}
            value={food}
            placeholder={"Enter a food..."}
            placeholderTextColor={"#BBBBBB"}
          />
          <TouchableOpacity style={styles.buttonText} onPress={onSubmitPress}>
            <Text style={styles.buttonLabel}>submit</Text>
          </TouchableOpacity>
          {successVisible && (
            <View>
              <Text>Food logged!</Text>
            </View>
          )}
        </View>
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
}

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
    flex: 1,
    paddingBottom: 64,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  textUpper: {
    alignSelf: "stretch",
    height: 34,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  title: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "white",
    fontSize: 28,
    fontFamily: "Caros", // Ensure the font is linked or available in the project.
    fontWeight: "500",
  },
  frame29: {
    alignSelf: "stretch",
    height: 104,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
  },
  textInputField: {
    alignSelf: "stretch",
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputText: {
    textAlign: "center",
    color: "#BBBBBB",
    fontSize: 24,
    fontFamily: "Caros",
    fontWeight: "400",
  },
  buttonText: {
    alignSelf: "stretch",
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: "#F694C1",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "Caros",
    fontWeight: "400",
  },
  bottomBar: {
    width: 393,
    height: 48, // Ensure a fixed height for the bottom bar
    flexDirection: "row",
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
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
});

export default LogFoodScreen;