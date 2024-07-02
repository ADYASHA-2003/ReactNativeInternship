import React, { useContext, useMemo } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductCard2 from "../commonComponents/ProductCard2";
import { ShoppingContext } from "../contexts/shoppingContext";

const SimilarProducts = ({ category, currentProductId }) => {
  const { products } = useContext(ShoppingContext);

  const similarProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    return products.filter(
      (product) =>
        product.category.toLowerCase() === category.toLowerCase() &&
        product.id !== currentProductId
    );
  }, [products, category, currentProductId]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={similarProducts}
        keyExtractor={(item) => item.new_id.toString()}
        renderItem={({ item }) => (
          <ProductCard2 product={item} isCart={false} isGrid={true}/>
        )}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },
  flatlistContent: {
    paddingHorizontal: 10,
  },
});

export default SimilarProducts;
