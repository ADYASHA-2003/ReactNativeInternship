import React, { useState ,useContext} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CART_ACTIONS } from "../actions/cartActions";
import { ShoppingContext } from "../contexts/shoppingContext";

const PaymentScreen = ({ navigation, route }) => {
  const { items,total } = route.params;
  const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { cartDispatch} = useContext(ShoppingContext);

  const handlePayment = () => {
    if (!selectedPaymentMode) {
      setShowModal(true);
      return;
    }

    console.log(`Processing payment with ${selectedPaymentMode}`);
    setShowModal(true);
  };

  const handleConfirmPayment = () => {
    setShowModal(false);
    setShowSuccessModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowModal(false); 
    cartDispatch({
      type: CART_ACTIONS.REMOVE_ALL,
    })
    navigation.navigate("Orders", {
      items,
      total,
      shippingDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString(), 
      paymentMethod: selectedPaymentMode,
    });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          styles.paymentMode,
          selectedPaymentMode === "creditCard" && styles.selectedPaymentMode,
        ]}
        onPress={() => setSelectedPaymentMode("creditCard")}
      >
        <AntDesign
          name="creditcard"
          size={24}
          color={selectedPaymentMode === "creditCard" ? "gold" : "black"}
        />
        <Text style={styles.paymentModeText}>Credit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentMode,
          selectedPaymentMode === "paypal" && styles.selectedPaymentMode,
        ]}
        onPress={() => setSelectedPaymentMode("paypal")}
      >
        <AntDesign
          name="wallet"
          size={24}
          color={selectedPaymentMode === "paypal" ? "gold" : "black"}
        />
        <Text style={styles.paymentModeText}>PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentMode,
          selectedPaymentMode === "cod" && styles.selectedPaymentMode,
        ]}
        onPress={() => setSelectedPaymentMode("cod")}
      >
        <AntDesign
          name="swap"
          size={24}
          color={selectedPaymentMode === "cod" ? "gold" : "black"}
        />
        <Text style={styles.paymentModeText}>Cash on Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Confirm Payment</Text>
            {selectedPaymentMode ? (
              <View>
                <Text style={styles.modalText}>
                  You chose to pay with: {selectedPaymentMode}
                </Text>
                <Text style={styles.modalText}>Total Amount: ${total}</Text>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleConfirmPayment}
                >
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.modalText}>
                Please choose a payment mode to proceed.
              </Text>
            )}
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
            {selectedPaymentMode === "cod"
                ? "Order Placed. To be dispatched soon..."
                : "Payment Successful..."}
              </Text>
            <Text style={styles.modalText}>Thank you for your purchase!</Text>
            <Text style={styles.modalText}>
              Your order will be shipped by: {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString()}
            </Text>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handlePaymentSuccess}
            >
              <Text style={styles.confirmButtonText}>Go to Orders</Text>
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
    padding: 20,
    justifyContent: "center",
    paddingBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "gray",
    textAlign: "center",
  },
  paymentMode: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedPaymentMode: {
    backgroundColor: "lightyellow",
    borderColor: "gold",
  },
  paymentModeText: {
    marginLeft: 10,
    fontSize: 16,
  },
  payButton: {
    backgroundColor: "gold",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  payButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign:'center'
  },
  modalText: {
    fontSize: 15,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  confirmButton: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PaymentScreen;

