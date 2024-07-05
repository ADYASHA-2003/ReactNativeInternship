import React, { useContext, useEffect, useMemo } from "react";
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

const WishList = () => {
  const { wishlist, products } = useContext(ShoppingContext);

  useEffect(() => {
    console.log("Inside WishList", wishlist);
  }, [wishlist]);

  const getMostPopularCategory = useMemo(() => {
    if (wishlist.length === 0) return null;

    // Product count by wishlisted category
    const categoryCount = wishlist.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    // Categories with maximum products
    const maxCount = Math.max(...Object.values(categoryCount));
    const popularCategories = Object.keys(categoryCount).filter(
      (category) => categoryCount[category] === maxCount
    );

     // Tie, choice - category of the latest added product
     if (popularCategories.length > 1) {
      const latestAddedProduct = wishlist[wishlist.length - 1];
      return latestAddedProduct.category;
    }

    return popularCategories[0]; 
  }, [wishlist]);

  const recommendedProducts = useMemo(() => {
    if (!products || !getMostPopularCategory) return [];

    // Most popular category excluding wishlisted product
    const wishlistProductIds = wishlist.map(product => product.id);
    return products.filter(
      (product) =>
        product.category === getMostPopularCategory &&
        !wishlistProductIds.includes(product.id)
    );
  }, [products, getMostPopularCategory, wishlist]);


  return (
    <View style={styles.container}>
      {wishlist.length === 0 ? (
        <View style={styles.emptyWishlistContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/5959/5959610.png",
            }}
            style={{ height: 100, width: 100, justifyContent: "center" }}
          />
          <Text style={styles.emptyWishlistText}>Your wishlist is empty.</Text>
        </View>
      ) : (
        <ScrollView>
        <View>
          <FlatList
            style={styles.flatView}
            data={wishlist.wishlist}
            renderItem={({ item }) => (
              <ProductCard2 key={item.id} product={item} isWishlist={true} isCart={false} /> //removeFromWishlist={removeFromWishlist}
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
          <View>
            {/* Wishlist Section */}
            <FlatList
              style={styles.flatView}
              data={wishlist}
              renderItem={({ item }) => (
                <ProductCard2 key={item.id} product={item} isWishlist={true} />
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            />

            {/* Recommended Products Section */}
            {recommendedProducts.length > 0 && (
              <View style={styles.recommendedContainer}>
                <Text style={styles.recommendedTitle}>
                  Recommended For You
                </Text>
                <FlatList
                  horizontal
                  data={recommendedProducts}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <ProductCard2 product={item} isCart={false} isGrid={true} />
                  )}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.recommendedFlatlistContent}
                />
              </View>
            )}
          </View>
        </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatView: {
    width: Dimensions.get("window").width,
  },
  emptyWishlistContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyWishlistText: {
    fontSize: 18,
    color: "#888",
  },
  recommendedContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  recommendedTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    textAlign:'center',
    color:'gray'
  },
  recommendedFlatlistContent: {
    paddingHorizontal: 10,
  },
});

export default WishList;
