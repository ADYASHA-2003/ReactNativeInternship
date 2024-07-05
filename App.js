import React, { useState } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

import Welcome from "./EcommerceApp/screens/Welcome";
import WelcomeNew from "./EcommerceApp/screens/WelcomeNew";
import Welcome3 from "./EcommerceApp/screens/Welcome3";
import NestedListDemo from "./screens/demo/NestedListDemo";
import ShoppingProvider from "./EcommerceApp/contexts/shoppingContext";
import TestComponent from "./EcommerceApp/commonComponents/TestComponent";
import { NavigationContainer } from "@react-navigation/native";
import BackgroundImage from "./EcommerceApp/commonComponents/BackgroundImage";
// import ProductsPage from ""

export default function App() {
  return (
    <NavigationContainer>
      <ShoppingProvider>
      {/* <BackgroundImage> */}
        <View style={styles.container}>
          
          <Welcome />
          {/* <WelcomeNew/> */}
          {/* <TestComponent/> */}
          {/* <NestedListDemo/> */}
          {/* <Welcome3/> */}
          {/* <ProductsPage/> */}
          
        </View>
        {/* </BackgroundImage> */}
      </ShoppingProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// https://previews.123rf.com/images/lux100/lux1001603/lux100160300058/54243109-illustration-of-seamless-pattern-wiht-doodle-supermarket-elements.jpg
