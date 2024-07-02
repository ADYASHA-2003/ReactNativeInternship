import React, { useEffect, useState, useContext } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Alert,
  Text,
  Image,
  ScrollView,TouchableOpacity
} from "react-native";
// import { CartContext } from "../contexts/cartContext";
import ProductCard2 from "./ProductCard2";
import { ShoppingContext } from "../contexts/shoppingContext";
// import Video from 'react-native-video';

const CartList = () => {
  const [isRefreshing, setisRefreshing] = React.useState(false);
  const { cart } = useContext(ShoppingContext);
  useEffect(() => {
    console.log("Inside CartList ", cart.cart);
    return () => {};
  }, []);

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = cart.cart.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  const calculateTotal = () => {
    return cart.cart.reduce((sum, item) => {
      const itemTotal = item.price * (quantities[item.id] || 1);
      return sum + itemTotal;
    }, 0).toFixed(2);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      {cart.cart.length === 0 || cart.length===0 ?(
        <View style={styles.emptyCartContainer}>
           <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/11329/11329060.png'}} style={{height:150,width:150}}/>
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
        <FlatList
            style={styles.flatView}
            data={cart.cart}
            renderItem={({ item }) => (
              <ProductCard2 key={item.id} product={item} isCart={true}  quantity={quantities[item.id] || 1}
              updateQuantity={updateQuantity}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={1}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            <TouchableOpacity style={{padding:10,backgroundColor:'gold',borderRadius:10,margin:40}}><Text style={{textAlign:'center',fontWeight:'bold',color:'white'}}>CHECKOUT</Text></TouchableOpacity>
          </View>
        </>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatView: {
    width: Dimensions.get("window").width,
  },
  container:{
    flex:1
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:250
  },
  backgroundVideo: {
    width: 200,
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
  },
  cartItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  totalContainer:{
    justifyContent:'flex-end',
    // marginTop:100,
    // backgroundColor:'lightblue',
    // position:'static',
    // padding:50,
    // borderTopLeftRadius:25,
    // borderTopRightRadius:25
  },totalText:{
    fontSize:20,
    fontWeight:'700',
    textAlign:'right',
    // marginVertical:10
  }
});

export default CartList;
