import React, { useState, useRef, useContext } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import ProductsPage2 from "../screens/ProductsPage2";
import DashBoard from '../screens/DashBoard'
import { ShoppingContext } from "../contexts/shoppingContext";
import { AUTH_USER_ACTIONS } from "../actions/authUserActions";

//Stack screen for this page do headerShown : false
export default function LoginPage({ navigation }) {
  const {authUserDispatch} = useContext(ShoppingContext)
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
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
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
        {passError ? <Text style={styles.errorText}>{passError}</Text> : null}
      </View>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handleLogin}
        onLongPress={() =>
          //   Alert.alert("Click once to proceed on submitting login form");
          // navigation.navigate('DashBoard')
          {
            console.log("Input mail",email);
            console.log("Input Password",pass);
            fetch("https://dummyjson.com/auth/login",{
              method:'POST',
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify({
                username: 'emilys',
                password:'emilyspass',
              })
            })
            .then(async(res)=>{
              const data = await res.json()
              if(!res.ok){
                console.log("Error");
                setErrorMessage(data?.message || "Somrthing went wrong")
              }
              else{
                authUserDispatch({
                  type:AUTH_USER_ACTIONS.SET_ALL_USERS,
                  payload:data
                })
                navigation.navigate('DashBoard')
              }
            })
          }
        }
      >
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  initialText: {
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "800",
    fontSize: 20,
  },
  input: {
    height: 45,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    // margin:10,
    marginBottom: 5,
    borderColor: "gray",
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
    marginLeft: "3px",
  },
  errorText: {
    color: "red",
    fontSize: 15,
    marginBottom: 10,
    height: 20,
  },
});
