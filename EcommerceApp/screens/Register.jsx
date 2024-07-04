import React, { useState, useRef } from "react";
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

export default function RegisterPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [name, setName] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passInputRef = useRef(null);
  const confirmPassInputRef = useRef(null);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setPassError("");
    setConfirmPassError("");

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }

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

    if (!confirmPass) {
      setConfirmPassError("Confirm Password is required");
      isValid = false;
    } else if (password !== confirmPass) {
      setConfirmPassError("Confirm Password must be same as password");
      isValid = false;
    }

    if (isValid) {
      console.log("Entered Name:", name);
      console.log("Entered Email:", email);
      console.log("Entered Password:", password);
      console.log("Entered Password for confirmation:", confirmPass);
      Alert.alert("Account Created Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
      navigation.navigate("Login");
    } 
    //using useRef to focus inputs
    else {
      if (!name) {
        nameInputRef.current.focus();
      } else if (!email || !validateEmail(email)) {
        emailInputRef.current.focus();
      } else if (!password || password.length < 6) {
        passInputRef.current.focus();
      } else if (!confirmPass || password !== confirmPass) {
        confirmPassInputRef.current.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.initialText}>Create Your Free Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setName(text);
          }}
          ref={nameInputRef}
          value={name}
          placeholder="Enter Full Name:"
          placeholderTextColor="black"
        />
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
          }}
          ref={emailInputRef}
          value={email}
          placeholder="Enter Email Address:"
          placeholderTextColor="black"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          ref={passInputRef}
          value={password}
          placeholder="Enter Password:"
          placeholderTextColor="black"
        />
        {passError ? <Text style={styles.errorText}>{passError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => {
            setConfirmPass(text);
          }}
          ref={confirmPassInputRef}
          value={confirmPass}
          placeholder="Enter Password Again:"
          placeholderTextColor="black"
        />
        {confirmPassError ? (
          <Text style={styles.errorText}>{confirmPassError}</Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handleSubmit}
        onLongPress={() => {
          console.log("OnLongPress called");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          Register
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
        Already have an account??
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Login")}
        >
          {" "}
          Login!
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white'
  },
  initialText: {
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "800",
    fontSize: 20,
  },
  input: {
    height: 45,
    // color:'white',
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // marginBottom: 20,
    marginBottom: 5,
    borderColor: "gray",
  },
  inputContainer:{
    marginBottom:15
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
  label: {
    fontWeight: "600",
    fontSize: 15,
    // marginLeft: "3px",
    alignSelf: "flex-start",
  },
  errorText: {
    color: "red",
    fontSize: 15,
    // marginBottom: 10,
    // height: 20,
  },
});
