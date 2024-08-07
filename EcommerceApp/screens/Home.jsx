import React from "react";
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");

export default function Home({ navigation, route }) {
  const image =
    "https://images.unsplash.com/photo-1584473457406-6240486418e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyb2Nlcnl8ZW58MHx8MHx8fDA%3D";

  return (
    <ImageBackground source={{ uri: image }} style={styles.imageBackground}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          YOUR ONE STOP SHOP FOR ALL YOUR NEEDS!
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
          console.log("Navigate to Registration Page");
        }}
        style={styles.button}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Get Started
          </Text>
          <Icon name="arrow-forward" size={20} color="white" style={{ marginLeft: 5 }} />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "gold",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 50,
  },
});

