import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Orders = ({ route }) => {
  const { items, total, shippingDate, paymentMethod } = route.params;

  const renderOrderItems = () => {
    return items.map((item) => (
      <View key={item.id} style={styles.row}>
        <Text style={[styles.cell, { flex: 2 }]}>{item.title}</Text>
        <Text style={styles.cell}>{item.quantity}</Text>
        <Text style={styles.cell}>
          ${(item.quantity * item.price).toFixed(2)}
        </Text>
        <Text style={[styles.cell, { flex: 2 }]}>{shippingDate}</Text>
      </View>
    ));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, { flex: 2 }]}>Product Title</Text>
        <Text style={styles.headerCell}>Quantity</Text>
        <Text style={styles.headerCell}>Amount</Text>
        <Text style={[styles.headerCell, { flex: 2 }]}>Shipping Date</Text>
      </View>
      <View style={{ flexWrap: "wrap" }}>{renderOrderItems()}</View>
      <Text style={styles.footerText}>
        Total Purchase Amount : ${total}
      </Text>
      <Text style={styles.footerText}>
      Chosen Payment Method: 
          {paymentMethod === 'cod' && ' Cash on Delivery'}
          {paymentMethod === 'creditCard' && ' Credit Card'}
          {paymentMethod === 'paypal' && ' PayPal'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    paddingVertical: 10,
  },
  headerCell: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    gap: 20,
  },
  cell: {
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Orders;
