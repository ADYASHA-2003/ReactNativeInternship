import React, { useEffect, useContext } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import ProductCard2 from "./ProductCard2";
import { ShoppingContext } from "../contexts/shoppingContext";

const CartList = ({ quantities, updateQuantity }) => {
  const { cart } = useContext(ShoppingContext);

  useEffect(() => {
    console.log("Inside CartList ", cart);
    return () => {};
  }, []);

  return (

      <View style={styles.container}>
        {cart.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Image
              source={{
                uri:
                  "https://cdn-icons-png.flaticon.com/512/11329/11329060.png",
              }}
              style={{ height: 150, width: 150 }}
            />
            <Text style={styles.emptyCartText}>Your cart is empty.</Text>
          </View>
        ) : (
          <>
              {/* <ScrollView contentContainerStyle={styles.scrollViewContainer}> */}
            <FlatList
              style={styles.flatView}
              data={cart}
              renderItem={({ item }) => (
                <ProductCard2
                  key={item.id}
                  product={item}
                  isCart={true}
                  quantity={quantities[item.id] || 1}
                  updateQuantity={updateQuantity}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={1}
            />
            {/* </ScrollView> */}
          </>
        )}
      </View>
    
  );
};

const styles = StyleSheet.create({
  flatView: {
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 250,
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
  },
});

export default CartList;
