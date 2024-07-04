import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CartList from "../commonComponents/CartList";
import { ShoppingContext } from "../contexts/shoppingContext";

const Cart = ({ navigation}) => {
  const [quantities, setQuantities] = useState({});
  const { cart } = useContext(ShoppingContext);

  // const [cartLength, setCartLength] = useState(0); // Local state for cart length

  // useEffect(() => {
  //   setCartLength(cart.cart.length); // Update cart length state
  //   if (onUpdateCartLength) {
  //     onUpdateCartLength(cart.cart.length); // Pass updated cart length to parent component
  //   }
  // }, [cart.cart.length, onUpdateCartLength]);

  const calculateTotal = () => {
    return cart.cart
      ?.reduce((sum, item) => {
        const itemTotal = item.price * (quantities[item.id] || 1);
        return sum + itemTotal;
      }, 0)
      .toFixed(2);
  };

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  const handleCheckout = () => {
    navigation.navigate('CheckoutSummary', {
      items: cart.cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: quantities[item.id] || 1,
        price: item.price
      })),
      total: calculateTotal()
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
      <Text style={styles.title}>Shopping Cart</Text>
      <Text style={styles.itemCount}> ({cart.cart.length} Items)</Text>
      </View>

      <CartList quantities={quantities} updateQuantity={updateQuantity} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "gray",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "700",
  },
  checkoutButton: {
    padding: 10,
    backgroundColor: "gold",
    borderRadius: 10,
  },
  checkoutText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});

export default Cart;

