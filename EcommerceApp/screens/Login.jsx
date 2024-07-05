import React, { useState, useRef, useContext } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
  ImageBackground,
} from "react-native";
import { ShoppingContext } from "../contexts/shoppingContext";
import { AUTH_USER_ACTIONS } from "../actions/authUserActions";

export default function LoginPage({ navigation }) {
  const { authUserDispatch } = useContext(ShoppingContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const emailInputRef = useRef(null);
  const passInputRef = useRef(null);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let isValid = true;
    setEmailError("");
    setPassError("");

    if (!email) {
      setEmailError("Email is required");
      emailInputRef.current.focus();
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      emailInputRef.current.focus();
      isValid = false;
    }

    if (!pass) {
      setPassError("Password is required");
      passInputRef.current.focus();
      isValid = false;
    } else if (pass.length < 6) {
      setPassError("Password must be at least 6 characters long");
      passInputRef.current.focus();
      isValid = false;
    }

    if (isValid) {
      console.log("Entered Email:", email);
      console.log("Entered Password:", pass);
      // setUser({
      //   email: email,
      //   isLoggedIn: true,
      // });
      Alert.alert("Logged In Successfully");
      setEmail("");
      setPass("");
      navigation.navigate("DashBoard");
    }
  };

  return (
    <ImageBackground
      source={{uri:'https://previews.123rf.com/images/lux100/lux1001603/lux100160300058/54243109-illustration-of-seamless-pattern-wiht-doodle-supermarket-elements.jpg'}} // Replace with your image path
      style={styles.background}
      imageStyle={{opacity:0.4}}
    >
      <View style={styles.container}>
        <Text style={styles.initialText}>Login to Continue</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            ref={emailInputRef}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Enter Registered Email Address"
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            ref={passInputRef}
            secureTextEntry={true}
            onChangeText={(text) => setPass(text)}
            value={pass}
            placeholder="Enter Password"
          />
          {passError ? (
            <Text style={styles.errorText}>{passError}</Text>
          ) : null}
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontWeight: "400",
            fontSize: 15,
          }}
        >
          Don't have an account?
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Register")}
          >
            {" "}
            Register!
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // opacity:0.2
    // backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
    marginHorizontal:20,
    padding:30,
    borderRadius:30
  },
  initialText: {
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "800",
    fontSize: 20,
  },
  inputContainer: {
    marginBottom: 15,
    // backgroundColor:'white'
  },
  label: {
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 3,
  },
  input: {
    height: 45,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    borderColor: "gray",
    backgroundColor: "white",
  },
  submitBtn: {
    backgroundColor: "gold",
    width: 300,
    borderColor: "gold",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
  },
  errorText: {
    color: "red",
    fontSize: 15,
  },
});

