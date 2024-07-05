import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CheckoutSummary = ({ route }) => {
  const { items, total } = route.params;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const handleInputChange = (field, value) => {
    setAddress({ ...address, [field]: value });
  };

  const handleAddAddress = () => {
    if (
      !address.name ||
      !address.addressLine1 ||
      !address.city ||
      !address.state ||
      !address.postalCode ||
      !address.country
    ) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }
    setModalVisible(false);
    Alert.alert("Success", "Address added successfully.", [
      {
        text: "OK",
        onPress: () => navigation.navigate("PaymentScreen", { items,total }),
      },
    ]);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout Summary</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Product Title</Text>
        <Text style={styles.headerText}>Quantity</Text>
        <Text style={styles.headerText}>Net Price</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>{item.quantity}</Text>
            <Text style={styles.itemText}>
              ${(item.quantity * item.price).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleOpenModal}>
          <Text style={styles.addButtonText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Shipping Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={address.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address Line 1"
              value={address.addressLine1}
              onChangeText={(text) => handleInputChange("addressLine1", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Address Line 2"
              value={address.addressLine2}
              onChangeText={(text) => handleInputChange("addressLine2", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={address.city}
              onChangeText={(text) => handleInputChange("city", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="State"
              value={address.state}
              onChangeText={(text) => handleInputChange("state", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Postal Code"
              value={address.postalCode}
              onChangeText={(text) => handleInputChange("postalCode", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={address.country}
              onChangeText={(text) => handleInputChange("country", text)}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleAddAddress}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
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
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "gray",
    marginTop: 10,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "lightgray",
  },
  headerText: {
    fontWeight: "bold",
    width: "30%",
    textAlign: "center",
  },
  itemsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  itemText: {
    width: "30%",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "gold",
    backgroundColor: "white",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
  },
  addButton: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CheckoutSummary;


