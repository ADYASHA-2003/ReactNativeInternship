import React, { useContext, useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { UserContext } from "../../globalState/userContext";

export default function TextInputComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const { setUser } = useContext(UserContext);

  const validateEmail = () => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let isValid = true;
    setEmailError("");
    setPassError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (!password) {
      setPassError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPassError("Password must be at least 6 characters long");
      isValid = false;
    }

    if (isValid) {
      console.log("Entered Email:", email);
      console.log("Entered Password:", password);
      // setUser({
      //   email: email,
      //   isLoggedIn: true,
      // });
      Alert.alert('Logged In Successfully')
      setEmail("")
      setPassword("")
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
        placeholder="Enter email:"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        placeholder="Enter password:"
      />
      {passError ? <Text style={styles.errorText}>{passError}</Text> : null}

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handleLogin}
        onLongPress={() => {
          console.log("OnLongPress called");
        }}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 15 }}>
        Don't have an account?? <Text style={{ color: "blue" }}>Register!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize:15,
    marginBottom: 2,
    height:20
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  submitBtn: {
    backgroundColor: "gold",
    width: 300,
    borderColor: "gold",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
});
