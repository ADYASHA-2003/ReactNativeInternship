// ProductDetailsPage.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  GestureHandlerRootView,
  Swipeable,
  RectButton,
} from "react-native-gesture-handler";
import { useRef,useState } from "react";
import ReviewCard from "../commonComponents/ReviewCard";
import SimilarProducts from "../commonComponents/SimilarProducts";
import { WISHLIST_ACTIONS } from "../actions/wishlistAction";
import { CART_ACTIONS } from "../actions/cartActions";
import { useContext ,useEffect} from "react";
import { ShoppingContext } from "../contexts/shoppingContext";

export default function ProductDetailsPage({ route }) {
  const { product } = route.params;
  const swipeableRef = useRef(null);
  const [likedReviews, setLikedReviews] = useState({});
  const [clicked, setClicked] = useState(false);
  const {wishlist, wishlistDispatch,cart,cartDispatch} = useContext(ShoppingContext)


  useEffect(() => {
    const isInWishlist = wishlist && wishlist.some(item => item.id === product.id);
  
    if (isInWishlist !== clicked) {
      setClicked(isInWishlist);
    }
  }, [wishlist, product.id, clicked]);

  const renderRightActions = (reviewId,index) => {
    const isLiked = likedReviews[reviewId];
    return (
      <RectButton
        style={styles.rightAction}
        onPress={() => {
          setLikedReviews((prev) => ({
            ...prev,
            [reviewId]: !isLiked,
          }));
          swipeableRef.current.close();
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={20}
            color={isLiked ? "red" : "gray"}
          />
          <Text style={styles.actionText}>{isLiked?'Remove Like?':'Like This Review?'}</Text>
        </View>
      </RectButton>
    );
  };

  const handleBuyNow = () => {
    console.log("Add to cart inside details page");
    cartDispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payLoad: product,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
          size={28}
          color={clicked ? "red" : "black"}
        />
          </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={{ height: 300, width: 300, alignSelf: "center" }}
            source={{ uri: product.images?.[0] }}
          />
        </View>

        <Text style={styles.title}>{product.title}</Text>
        <Text
          style={[
            styles.availabilityStatus,
            {
              color:
                product.availabilityStatus === "In Stock" ? "green" : "red",
            },
          ]}
        >
          [{product.availabilityStatus}]
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.refText}>Price: ${product.price.toFixed(2)}</Text>
          <View style={styles.verticalBar} />
          <AntDesign
            style={{ alignSelf: "center" }}
            name="star"
            size={18}
            color="gold"
          />
          <Text style={styles.refText}> ({product.rating})</Text>
          <View style={styles.verticalBar} />
          <Text style={styles.refText}>Only {product.stock} pieces left</Text>
        </View>

        <View style={styles.horizontalBar} />

        <Text style={styles.labels}>Description:</Text>

        <View style={{ flexDirection: "row", gap: 10, marginVertical: 10 }}>
          {product.tags &&
            product.tags.map((item, index) => (
              <Text
                key={index}
                style={{ backgroundColor: "#fde", padding: 7, borderRadius: 5 }}
              >
                #{item}
              </Text>
            ))}
        </View>

        <Text style={styles.description}>{product.description}</Text>

        {product.brand && (
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15 }}>Brand : </Text>
            <Text
              style={{ alignSelf: "center", color: "blue", marginBottom: 10 }}
            >
              {product.brand}
            </Text>
          </View>
        )}

        <Text style={styles.labels}>
          Product Dimensions <Text style={{ fontSize: 15 }}>(in cm's)</Text>
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.dimText}>Depth: {product.dimensions.depth}</Text>
          <View style={styles.verticalBar} />
          <Text style={styles.dimText}>
            Height: {product.dimensions.height}
          </Text>
          <View style={styles.verticalBar} />
          <Text style={styles.dimText}>Width: {product.dimensions.width}</Text>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text style={styles.labels}>Shipping Details : </Text>
          <Text style={{ alignSelf: "center" }}>
            {product.shippingInformation}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Net Weight : </Text>
          <Text
            style={{ alignSelf: "center", color: "blue", marginBottom: 10 }}
          >
            {product.weight} (kgs)
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "lightgreen",
            padding: 5,
            marginHorizontal: 12,
            borderRadius: 7,
            width: 120,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {product.warrantyInformation}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text style={styles.labels}>Return Policy Details : </Text>
          <Text style={{ alignSelf: "center" }}>{product.returnPolicy}</Text>
        </View>

        <View style={styles.horizontalBar} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            borderBottomColor: "gray",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              width: 150,
              flexWrap: "wrap",
              justifyContent: "center",
              fontWeight: "500",
            }}
            numberOfLines={2}
          >
            Want to Know More About this Product?
          </Text>
          <Image
            style={styles.barcodeImg}
            source={{ uri: product.meta.qrCode }}
          />
        </View>

        <View style={styles.horizontalBar} />

        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowButtonText}>ADD TO CART</Text>
        </TouchableOpacity>


        <Text style={[styles.labels,{marginVertical:10}]}>Reviews ({product.reviews.length})</Text>

        {/* Swipeable */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          {product.reviews.map((review, index) => (
            <Swipeable
              key={index}
              ref={swipeableRef}
              renderRightActions={()=>renderRightActions(index)}
              onSwipeableOpen={(direction) => {
                console.log("Swipped..", direction);
              }}
            >
              <ReviewCard review={review} />
            </Swipeable>
          ))}
        </GestureHandlerRootView>

        <View style={styles.horizontalBar} />

          <Text style={{textAlign:'center',fontWeight:'800',marginVertical:10}}>Similar Products</Text>
          <Text style={{textAlign:'left',fontWeight:'500'}}>{`More in this category (${product.category})`}</Text>
        <SimilarProducts category={product.category} currentProductId={product.id}/>

      </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  wishlistBtn:{
    // justifyContent:'flex-end'
    alignSelf:'flex-end',
    marginTop:25
  },
  review: {
    backgroundColor: "lightblue",
    padding: 15,
    marginVertical: 10,
  },
  buyNowButton:{
    justifyContent:'center',
    backgroundColor:'gold',
    padding:12,
    marginVertical:5,
    borderRadius:10
  },
  labels: {
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "flex-start",
  },
  buyNowButtonText:{
    textAlign:'center',
    fontWeight:'900',
    color:'white',
    fontSize:15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
    textAlign: "center",
  },
  actionText: {
    alignSelf: "center",
    fontSize:10,
    marginHorizontal:5
  },
  rightAction:{
    alignSelf:'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    marginTop: 10,
  },
  refText: {
    fontSize: 18,
    color: "green",
  },
  dimText: {
    fontSize: 16,
    marginTop: 5,
    color: "green",
  },
  barcodeImg: {
    width: 100,
    height: 100,
  },
  verticalBar: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  horizontalBar: {
    width: "100%",
    backgroundColor: "gray",
    height: 1,
    marginVertical: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  availabilityStatus: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
});
