// import { useContext } from "react"
// import { ShoppingContext } from "../../EcommerceApp/contexts/shoppingContext"
// import { ScrollView, StyleSheet, View, Text } from "react-native"

// const NestedListDemo = () => {
//     const {products} = useContext(ShoppingContext)

//     return (
//         <ScrollView style={styles.NestedScrollView} nestedScrollEnabled={true} horizontal={true}>
//             <View>
//                 <Text style={{color:'red'}}>Categories</Text>
//             </View>
//             <ScrollView style={styles.NestedScrollView} nestedScrollEnabled={true} horizontal={true}>
//             {products.slice(15, 23).map(item =>
//                 <View key={item.id} style={styles.NestedScrollView1}>
//                     <Text style={styles.NestedText}>
//                         {item.title}
//                     </Text>
//                 </View>
//             )}
//             </ScrollView>
//         </ScrollView>
//     )
// }

// const styles=StyleSheet.create({
//     NestedText:{
//         color:'blue'
//     }
// })

// export default NestedListDemo


import React, { useContext, useEffect } from "react";
import { ShoppingContext } from "../../EcommerceApp/contexts/shoppingContext";
import { ScrollView, StyleSheet, View, Text } from "react-native";



const NestedListDemo = () => {
  const { products } = useContext(ShoppingContext);

  useEffect(() => {
    console.log("Products:", products); // Debug log to check products data
  }, [products]);

  return (
    <ScrollView style={styles.mainScrollView} nestedScrollEnabled={true} horizontal={true}>
      <View style={styles.categoryView}>
        <Text style={styles.categoryText}>Categories</Text>
      </View>
      <ScrollView style={styles.nestedScrollView} nestedScrollEnabled={true} horizontal={true}>
        {products.slice(15, 23).map((item) => (
          <View key={item.id} style={styles.productView}>
            <Text style={styles.productText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScrollView: {
    // flex: 1,
    backgroundColor: '#fff',
  },
  categoryView: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  categoryText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nestedScrollView: {
    flexDirection: 'row',
    padding: 10,
  },
  productView: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  productText: {
    color: 'blue',
    fontSize: 14,
  },
});

export default NestedListDemo;
