import React, { useEffect, useState } from "react";
import Product from "./Product";
import { View ,FlatList} from "react-native";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const refreshList = () => {
    setIsRefreshing(true);
    // alert("List Refreshed")
    Alert.alert("My App alerts", "Refreshed List..", [
      { text: "Back" },
      { text: "Ok" },
      { text: "Refresh" },
    ]);
    setIsRefreshing(false);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch((err) => {
        console.error(`ProductList - Failed to parse response ${err.message} `);
      })
      .then((res) => {
        const { products } = res;
        console.log("Returned number of items: ", products.length);
        setProducts(products);
      })
      .catch((err) => {
        console.error(
          `ProductList - Failed to retrieve products data ${err.message}`
        );
      });
  }, []);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={(item) => <Product key={item?.id} item={item} />}
        // renderItwm={({ item }) => <Product key={item.id} item={item} />}
        keyExtractor={item => item.id}
        extraData={isRefreshing}
        horizontal={false}
        inverted={false}
        numColumns={2}
        onRefresh={() => refreshList()}
        refreshing={isRefreshing}
      />
      {/* <Product /> */}
    </View>
  );
}
