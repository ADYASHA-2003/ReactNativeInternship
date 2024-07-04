import React, { useContext, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import ProductCard2 from "./ProductCard2";
import { ShoppingContext } from "../contexts/shoppingContext";

const WishList = () => {
  const { wishlist , wishlistDispatch } = useContext(ShoppingContext);

  useEffect(() => {
    console.log("Inside WishList", wishlist);
  }, [wishlist]);

  return (
    <View style={styles.container}>
      {wishlist.length === 0 || wishlist.wishlist.length === 0 ? (
        <View style={styles.emptyWishlistContainer}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5959/5959610.png'}} style={{height:100,width:100,justifyContent:'center'}}/>
          <Text style={styles.emptyWishlistText}>Your wishlist is empty.</Text>
        </View>
      ) : (
        <FlatList
          style={styles.flatView}
          data={wishlist.wishlist}
          renderItem={({ item }) => (
            <ProductCard2 key={item.id} product={item} isWishlist={true} />   //removeFromWishlist={removeFromWishlist}
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
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
  emptyWishlistContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 350,
    // backgroundColor:'white',
    flex:1
  },
  emptyWishlistText: {
    fontSize: 18,
    color: "#888",
  },
});

export default WishList;

