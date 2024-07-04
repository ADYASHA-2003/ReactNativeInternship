import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import ImagePickerComponent from "./ImagePickerComponent";

const ProfileForm = ({ initialUser, updateUser, closeModal }) => {
  const [name, setName] = useState(initialUser.firstName);
  const [email, setEmail] = useState(initialUser.email);
  const [image, setImage] = useState(initialUser.image);

  const handleSaveProfile = () => {
    const updatedUser = {
      ...initialUser,
      firstName: name,
      email: email,
      image: image,
    };

    updateUser(updatedUser);
    Alert.alert("Profile Updated", "Your profile has been updated successfully!");
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <ImagePickerComponent setImage={setImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "blue",
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ProfileForm;




