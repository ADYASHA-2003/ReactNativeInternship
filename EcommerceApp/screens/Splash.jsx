import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated, View, Text, Image } from "react-native";
import { SplashScreen } from "expo";

const Splash = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const splashTimeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, [navigation, fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Welcome
      </Animated.Text>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images.unsplash.com/photo-1522643628976-0a170f6722ab?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    position: "absolute",
    top: "50%",
    zIndex: 1, 
    // backgroundColor: "rgba(255, 255, 255, 0.8)", 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Splash;



