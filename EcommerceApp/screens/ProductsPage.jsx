// import React from 'react'
// import { Text, View } from 'react-native'

// export default function ProductsPage() {
//   return (
//     <View>
//       <Text>Products Page</Text>
//     </View>
//   )
// }

import { useState } from "react";
import { FlatList,Dimensions, TouchableOpacity, View, StyleSheet,Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProductCard from "../commonComponents/ProductCard";

const { width } = Dimensions.get('window');

const ProductsPage = () => {
  const [isGrid, setIsGrid] = useState(true);

  const toggleView = () => {
    setIsGrid((prevIsGrid) => !prevIsGrid);
  };

  const products = [
    {
      id: "1",
      name: "Nirvana 751 ANC",
      image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797',
      price: 19.99,
      description: "Description of Product 1",
    },
    {
      id: "2",
      name: "Nirvana Utopia",
      image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Eutopia.jpg?v=1711716650',
      price: 29.99,
      description: "Description of Product 2",
    },
    {
      id: "3",
      name: "Immortal 700",
      image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_700_35baa2dd-cf19-4eab-8df3-c79ae962fb85.jpg?v=1699501201',
      price: 39.99,
      description: "Description of Product 3",
    },
    {
        id: "4",
        name: "Nirvana 751 ANC",
        image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797',
        price: 19.99,
        description: "Description of Product 1",
      },
      {
        id: "5",
        name: "Nirvana Utopia",
        image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Eutopia.jpg?v=1711716650',
        price: 29.99,
        description: "Description of Product 2",
      },
      {
        id: "6",
        name: "Immortal 700",
        image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_700_35baa2dd-cf19-4eab-8df3-c79ae962fb85.jpg?v=1699501201',
        price: 39.99,
        description: "Description of Product 3",
      },
      {
        id: "7",
        name: "Nirvana 751 ANC",
        image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797',
        price: 19.99,
        description: "Description of Product 1",
      },
      {
        id: "8",
        name: "Nirvana Utopia",
        image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Eutopia.jpg?v=1711716650',
        price: 29.99,
        description: "Description of Product 2",
      },
      {
        id: "9",
        name: "Immortal 700",
        image:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_700_35baa2dd-cf19-4eab-8df3-c79ae962fb85.jpg?v=1699501201',
        price: 39.99,
        description: "Description of Product 3",
      },
  ];
  

  return (
    <View style={styles.container}>
      {/*Toggle Buttons */}
      <View style={styles.toggleContainer}>
        {/* Grid View */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGrid(true)}
        >
          <Icon
            name="grid-outline"
            size={25}
            color={isGrid ? "blue" : "grey"}
          />
        </TouchableOpacity>

        {/* List View */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGrid(false)}
        >
          <Icon
            name="list-outline"
            size={25}
            color={!isGrid ? "blue" : "grey"}
          />
        </TouchableOpacity>
      </View>

      <Text style={{fontWeight:'500',fontSize:10}}>Showing your products listing</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={isGrid ? 2 : 1}
        renderItem={({ item }) => (
          <ProductCard product={item} isGrid={isGrid} />
        )}
        contentContainerStyle={isGrid ? styles.gridContent : styles.listContent}
        key={isGrid ? "g" : "l"}
        // style={[styles.flatList, { width: isGrid ? width - 20 : width - 20 }]}
        style={[styles.flatList, { width: width - 20 }]}
        ListHeaderComponent={() => (
            <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline',marginBottom:20 }}>
            Headphones
            </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    position:'static',
  },
  toggleContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  flatList: {
    marginTop: 50,
  },
  toggleButton: {
    marginHorizontal: 5,
  },
  listContent: {
    justifyContent: "space-between",
    // marginTop:20
  },
  gridContent:{

  }
});

export default ProductsPage;
