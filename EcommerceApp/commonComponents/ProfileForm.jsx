//use modal
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import CustomTextInput from "../commonComponents/CustomTextInput";
import * as ImagePicker from "expo-image-picker";
import CustomButton from "./CustomButton";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);

  const [isValidName, setIsValidName] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);
  const [addressErrorMessage, setAddressErrorMessage] = useState("");

  const validateName = () => {
    if (name.trim() === "") {
      setIsValidName(false);
      setNameErrorMessage("Name is required");
    } else {
      setIsValidName(true);
      setNameErrorMessage("");
    }
  };

  const validateEmail = () => {
    // Basic email validation for demonstration
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setIsValidEmail(false);
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      setIsValidEmail(true);
      setEmailErrorMessage("");
    }
  };

  const validatePhone = () => {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setIsValidPhone(false);
      setPhoneErrorMessage("Please enter a valid 10-digit phone number");
    } else {
      setIsValidPhone(true);
      setPhoneErrorMessage("");
    }
  };

  const validateAddress = () => {
    if (address.trim() === "") {
      setIsValidAddress(false);
      setAddressErrorMessage("Address is required");
    } else {
      setIsValidAddress(true);
      setAddressErrorMessage("");
    }
  };

  const handleSaveProfile = () => {
    validateName();
    validateEmail();
    validatePhone();
    validateAddress();

    if (isValidName && isValidEmail && isValidPhone && isValidAddress) {
      console.log("Profile saved successfully");
    } else {
      console.log("Validation failed. Please correct errors.");
    }
  };

  const handleImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setImage(pickerResult.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <CustomTextInput
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Enter your name"
        errorMessage={nameErrorMessage}
        isValid={isValidName}
        // validationMessage="Name is required"
      />
      <CustomTextInput
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        errorMessage={emailErrorMessage}
        isValid={isValidEmail}
        // validationMessage="Please enter a valid email address"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" // Email regex pattern
      />
      <CustomTextInput
        label="Phone Number"
        value={phone}
        onChange={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        errorMessage={phoneErrorMessage}
        isValid={isValidPhone}
        // validationMessage="Please enter a valid 10-digit phone number"
      />

      <CustomTextInput
        label="Address"
        value={address}
        onChange={setAddress}
        placeholder="Enter your address"
        errorMessage={addressErrorMessage}
        isValid={isValidAddress}
      />

      <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:20,marginHorizontal:5}}>Pick your profile picture</Text>
        <TouchableOpacity
          style={styles.imagePickerButton}
          onPress={handleImagePicker}
        >
          <CustomButton
            iconOnly
            variant="primary"
            size="small"
            icon={<AntDesign name="camera" size={20} color="white" />} // AntDesign icon
            onPress={handleImagePicker}
          />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      {/* <Button title="Save Profile" onPress={handleSaveProfile} /> */}
      <CustomButton
        text="Save Profile"
        variant="primary"
        size="medium"
        onPress={handleSaveProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagePickerButton: {
    // backgroundColor: 'blue',
    // padding: 10,
    // borderRadius: 5,
    alignSelf:'center',
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
    marginTop: 20,
  },
});

export default ProfileForm;
