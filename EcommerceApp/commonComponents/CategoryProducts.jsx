import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const CategoryProducts = ({ products, category }) => {
  // Filter products for the specific category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>Price: {item.price}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
  productContainer: {
    marginRight: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    width: 150,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
  },
});

export default CategoryProducts;
