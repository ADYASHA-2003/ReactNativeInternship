import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ShoppingContext } from "../contexts/shoppingContext";
import ProfileForm from "../commonComponents/ProfileForm";

const Account = () => {
  const navigation = useNavigation();
  const { authUser } = useContext(ShoppingContext);

  const [dummyUser, setDummyUser] = useState({
    firstName: "Ady",
    lastName: "",
    email: "ady@gmail.com",
    image: "https://w7.pngwing.com/pngs/140/492/png-transparent-user-avatar-playerunknown-s-battlegrounds-cryptocurrency-mixer-others-thumbnail.png", // Replace with a placeholder image URL
  });

  const { firstName, lastName, email, image } = dummyUser;
  const [modalVisible, setModalVisible] = useState(false);
  const updateUser = (newUserData) => {
    setDummyUser(newUserData);
    setModalVisible(false);
  };

  useEffect(() => {
    console.log("Context auth:", authUser);
  }, [authUser]);

  const handleEditProfile = () => {
    console.log("Edit Profile");
    setModalVisible(true);
  };

  const handleSettings = () => {
    console.log("Settings");
  };

  const handleAbout = () => {
    console.log("About");
  };

  const handleLogout = () => {
    console.log("Logout");
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: image }} style={styles.avatarIcon} />
        <Text style={styles.username}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>

      <TouchableOpacity style={styles.item} onPress={handleEditProfile}>
        <View style={styles.itemButton}>
          <AntDesign
            name="edit"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemButton}>
          <AntDesign
            name="bells"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Notifications</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.itemButton}>
          <AntDesign
            name="car"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>My Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleSettings}>
        <View style={styles.itemButton}>
          <AntDesign
            name="setting"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handleAbout}>
        <View style={styles.itemButton}>
          <AntDesign
            name="infocirlceo"
            size={24}
            color="black"
            style={styles.itemIcon}
          />
          <Text style={styles.itemText}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={styles.logoutButtonInner}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </View>
      </TouchableOpacity>

      {/* ProfileForm modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <ProfileForm
              initialUser={dummyUser}
              updateUser={updateUser}
              closeModal={() => setModalVisible(false)} // Pass closeModal here
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatarIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
  logoutButton: {
    marginBottom: 10,
    backgroundColor: "gold",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logoutButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay background
  },
  modalContent: {
    width: 350,
    height:450,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
});

export default Account;





