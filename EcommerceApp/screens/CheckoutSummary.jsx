import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ShoppingContext } from "../contexts/shoppingContext";

const CheckoutSummary = ({ route, navigation }) => {
  const { items, total } = route.params;
  const { cartDispatch } = useContext(ShoppingContext);

  const handleProceedToPay = () => {
    navigation.navigate("PaymentScreen", { total });
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
            <Text style={styles.itemText}>${ (item.quantity * item.price).toFixed(2) }</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={handleProceedToPay}
        >
          <Text style={styles.proceedText}>Proceed to Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop:10
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
    borderTopColor: "lightgray",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "lightgray",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
  },
  proceedButton: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 10,
  },
  proceedText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CheckoutSummary;

