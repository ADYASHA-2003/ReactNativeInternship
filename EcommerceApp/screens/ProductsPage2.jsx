import React, { useContext, useEffect, useState, useMemo } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard2 from "../commonComponents/ProductCard2";
import { ShoppingContext } from "../contexts/shoppingContext";
import { PRODUCT_ACTIONS } from "../actions/productActions";
import CategoryHeader from "../commonComponents/CategoryHeader";
import ProductsHeader from "../commonComponents/ProductsHeader";

export default function ProductsPage2() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true); // true for low to high, false for high to low
  const [isGrid, setIsGrid] = useState(true); // true for grid view, false for list view

  const { products, productsDispatch } = useContext(ShoppingContext);
  const productStorageKey = "EcommerceApp_Products";
  const categories = ["All", "Groceries", "Furniture", "Beauty", "Fragrances"];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortToggle = () => {
    setSortAsc((prevSortAsc) => !prevSortAsc);
  };

  const handleLayoutToggle = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const storedProducts = await AsyncStorage.getItem(productStorageKey);
  //       console.log("Fetched products from AsyncStorage:", JSON.parse(storedProducts));
  //       if (storedProducts) {
  //         productsDispatch({
  //           type: PRODUCT_ACTIONS.SET_ALL_PRODUCTS,
  //           payload: JSON.parse(storedProducts),  //serialising and deserializing
  //         });
  //         setLoading(false);
  //       } else {
  //         console.log("No products found in AsyncStorage, fetching from API");
  //         const response = await fetch("https://dummyjson.com/products");
  //         const data = await response.json();
  //         const productsWithUniqueIds = data.products.map((product) => ({
  //           ...product,
  //           new_id: `${product.category.toLowerCase()}_${product.id}`,
  //         }));

  //         await AsyncStorage.setItem(
  //           productStorageKey,
  //           JSON.stringify(productsWithUniqueIds)
  //         );

  //         productsDispatch({
  //           type: PRODUCT_ACTIONS.SET_ALL_PRODUCTS,
  //           payload: productsWithUniqueIds,
  //         });
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products from API...");

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
  
        const productsWithUniqueIds = data.products.map((product) => ({
          ...product,
          new_id: `${product.category.toLowerCase()}_${product.id}`,
        }));

        await AsyncStorage.setItem(
          productStorageKey,
          JSON.stringify(productsWithUniqueIds)
        );
  
        console.log("Products fetched from API and stored in AsyncStorage:",productsWithUniqueIds);

        productsDispatch({
          type: PRODUCT_ACTIONS.SET_ALL_PRODUCTS,
          payload: productsWithUniqueIds,
        });
  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products from API:", error);
        console.log("Fetching products from AsyncStorage...");

        const storedProducts = await AsyncStorage.getItem(productStorageKey);
        if (storedProducts) {
          console.log("Products fetched from AsyncStorage:",storedProducts);
          productsDispatch({
            type: PRODUCT_ACTIONS.SET_ALL_PRODUCTS,
            payload: JSON.parse(storedProducts),
          });
        } else {
          console.error("No products found in AsyncStorage either.");
        }
  
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  // const filteredProducts = useMemo(() => {
  //   if (!products || products.length === 0) return [];

  //   const selectedCategoryLower = selectedCategory.toLowerCase();

  //   if (selectedCategoryLower === "all") {
  //     return products;
  //   } else {
  //     return products.filter(
  //       (product) => product.category.toLowerCase() === selectedCategoryLower
  //     );
  //   }
  // }, [products, selectedCategory]);

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
  
    let filtered = products.filter((product) => {
      const selectedCategoryLower = selectedCategory.toLowerCase();
      const matchesCategory = selectedCategoryLower === "all" || product.category.toLowerCase() === selectedCategoryLower;
  
      //early return
      if (!matchesCategory) return false;
  
      if (searchQuery) {
        const queryLower = searchQuery.toLowerCase();
        return (
          product.title.toLowerCase().includes(queryLower) ||
          product.tags.some((tag) => tag.toLowerCase().includes(queryLower))
        );
      }
  
      return true;
    });
  
    // Sorting
    if (sortAsc) {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }
  
    return filtered;
  }, [products, selectedCategory, searchQuery, sortAsc]);
  

  if (loading) {
    return (
      <View style={styles.containerReload}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
       <ProductsHeader
         placeholder={
          selectedCategory !== "All"
            ? `Search in ${selectedCategory}`
            : "Search by tags, titles, brands..."
        }
        isGrid={isGrid}
        sortAsc={sortAsc}
        onSearch={handleSearch}
        onSortToggle={handleSortToggle}
        onLayoutToggle={handleLayoutToggle}
      />
      <CategoryHeader
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />
      {selectedCategory !== "All" && (
        <Text style={styles.categoryText}>
          Showing products in {selectedCategory}
        </Text>
      )}
      <FlatList
        data={filteredProducts}
        // numColumns={2}
        numColumns={isGrid ? 2 : 1}
        key={isGrid ? "grid" : "list"}
        keyExtractor={(item) => item.new_id.toString()}
        renderItem={({ item }) => (
          <ProductCard2 product={item} isCart={false} isGrid={isGrid} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerReload: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    padding: 5,
    fontSize: 15,
  },
})
