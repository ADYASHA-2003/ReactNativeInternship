import React, { useEffect, useState, useContext } from "react";
// import { CartContext } from "../contexts/cartContext";
import { ShoppingContext } from "../contexts/shoppingContext";
import { CART_ACTIONS } from "../actions/cartActions";
import { WISHLIST_ACTIONS } from "../actions/wishlistAction";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const ProductCard2 = ({
  product,
  isCart = false,
  quantity,
  updateQuantity,
  isWishlist = false,
  isGrid
}) => {
  const navigation = useNavigation();
  const { cartDispatch, cart, wishlistDispatch,wishlist } = useContext(ShoppingContext);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const isInWishlist = wishlist && wishlist.some(item => item.id === product.id);
  
    if (isInWishlist !== clicked) {
      setClicked(isInWishlist);
    }
  }, [wishlist, product.id, clicked]);
  
  
  const renderTags = () => {   
    return product.tags?.map((tag, index) => (
      <Text key={index} style={styles.tag}>
        #{tag}
      </Text>
    ));
  };

  const [shortTitle, setShortTitle] = useState(product.title);

  useEffect(() => {
    const words = product.title.split(" ");
    if (words.length > 3) {
      const shortTitle = `${words.slice(0, 3).join(" ")}...`;
      setShortTitle(shortTitle);
    }
  }, [product.title]);

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, isCart && styles.cartCard]}
      onPress={() => navigation.navigate("ProductDetailsPage", { product })}
    >
      <View style={[styles.productItem, isCart && styles.cartView,  !isGrid && !isWishlist && styles.listContainer]}>
        <Image
          source={{ uri: product.images?.[0] }}
          style={[styles.gridImage, isCart && styles.cartProductImage]}
        />

        {!isWishlist && !isCart && (
          <TouchableOpacity
            style={styles.wishlistBtn}
            onPress={() => {
              setClicked(!clicked)
              if (!clicked) {
                wishlistDispatch({
                  type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
                  payload: product,
                });
              } else {
                wishlistDispatch({
                  type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST,
                  payload: product.id,
                });
              }
            }}
          >
            <AntDesign
          name={clicked ? "heart" : "hearto"}
          size={20}
          color={clicked ? "red" : "black"}
        />
          </TouchableOpacity>
        )}

        {isWishlist && (
          <TouchableOpacity
            style={styles.wishlistBtn}
            onPress={() => {
              wishlistDispatch({
                type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST,
                payload: product.id,
              });
            }}
          >
            <AntDesign name="delete" size={20} color="black" />
          </TouchableOpacity>
        )}

        <View
          style={[
            styles.detailsContainer,
            isCart && styles.cartDetailsContainer,
          ]}
        >
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.productTitle}>
              {shortTitle}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>{renderTags()}</View>

          <Text style={styles.price}>
            Price: ${product.price}
          </Text>

          <Text
            style={[
              styles.availabilityStatus,
              {
                color:
                  product.availabilityStatus === "In Stock" ? "green" : "red",
              },
            ]}
          >
            {product.availabilityStatus}
          </Text>
          <View style={styles.actionBtns}>
            {!isCart && (
              <TouchableOpacity
                style={styles.addToCartBtn}
                onPress={() => {
                  console.log("something");
                  cartDispatch({
                    type: CART_ACTIONS.ADD_TO_CART,
                    payLoad: product,
                  });
                  wishlistDispatch({ type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST, payload: product.id });
                }}
              >
                <Text style={styles.btnText}>ADD TO CART</Text>
              </TouchableOpacity>
            )}

            {!isCart && (
              <TouchableOpacity style={styles.addToCartBtn}>
                <Text style={styles.btnText}>BUY NOW</Text>
              </TouchableOpacity>
            )}

            {isCart && (
              <View style={{ flexDirection: "row" }}>
                <View style={styles.updateQuantity}>
                  <TouchableOpacity
                    style={styles.quantityBtn}
                    onPress={handleDecrease}
                  >
                    <Text style={styles.quantitybtnText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityBtn}
                    onPress={handleIncrease}
                  >
                    <Text style={styles.quantitybtnText}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={[styles.addToCartBtn, isCart && styles.cartRemoveBtn]}
                  onPress={() =>
                    cartDispatch({
                      type: CART_ACTIONS.REMOVE_FROM_CART,
                      payLoad: product.id,
                    })
                  }
                >
                  <Text
                    style={[styles.btnText, isCart && styles.cartRemoveBtnText]}
                  >
                    REMOVE FROM CART
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  listContainer:{
    flexDirection:'row',
    paddingVertical:10
  },
  updateQuantity: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 3,
    width: 60,
    justifyContent: "center",
  },
  cartProductImage: {
    width: 150,
  },
  titleContainer: {
    height: 20,
    justifyContent: "center",
  },
  tag: {
    fontSize: 10,
    backgroundColor: "#fde",
    padding: 5,
    borderRadius: 7,
  },
  cartDetailsContainer: {
    alignItems: "center",
    // flex: 1,
    // marginVertical: 10,
    paddingHorizontal: 10,
  },
  detailsContainer: {
    alignItems: "center",
  },
  cartView: {
    flexDirection: "row",
    marginRight: 18,
  },
  quantitybtnText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 1,
    paddingHorizontal:3,
  },
  cartCard: {
    flexDirection: "column",
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  availabilityStatus: { fontWeight: "bold" },
  btnText: {
    color: "white",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "center",
  },
  gridImage: {
    borderColor: "black",
    height: 120,
    width: 120,
  },
  productItem: {
    paddingHorizontal: 5,
    margin: 2,
    borderBottomColor: "#ddd",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    // width:180
    // width: Dimensions.get("window").width / 2 - 20,
    position: "relative",
  },
  productTitle: {
    fontSize: 12,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  price: {
    fontWeight: "400",
    fontSize: 14,
    color: "black",
  },
  actionBtns: {
    flexDirection: "row",
  },
  addToCartBtn: {
    backgroundColor: "gold",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  badgeContainer: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
  wishlistBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    // backgroundColor: "#D3D3D3",
    padding: 3.5,
    borderRadius: 30,
    zIndex: 1,
  },
});

export default ProductCard2;