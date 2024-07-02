import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet,Text } from "react-native";
// import { AntDesign } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductsHeader = ({
  placeholder,
  onSearch,
  onSortToggle,
  onLayoutToggle,
  isGrid,
  sortAsc,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSortTooltip, setShowSortTooltip] = useState(false);

  const toggleSortTooltip = () => {
    setShowSortTooltip(!showSortTooltip);
  };

  const handleSortToggle = () => {
    onSortToggle();
    toggleSortTooltip(); // Close tooltip after toggling sort
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={onSortToggle}
          onLongPress={toggleSortTooltip}
          onPressOut={() => setShowSortTooltip(false)}
        >
          <AntDesign
            name={sortAsc ? "arrowdown" : "arrowup"}
            size={24}
            color="black"
          />
          {showSortTooltip && (
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>
                {sortAsc ? "Price: Low to High" : "Price: High to Low"}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.layoutButton} onPress={onLayoutToggle}>
          <AntDesign
            name={!isGrid ? "appstore-o" : "bars"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginRight: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: "green",
    padding: 8,
    borderRadius: 20,
  },
  actionsContainer: {
    flexDirection: "row",
  },
  sortButton: {
    marginLeft: 10,
  },
  layoutButton: {
    marginLeft: 10,
  },
});

export default ProductsHeader;
