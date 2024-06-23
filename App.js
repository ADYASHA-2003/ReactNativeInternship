import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
} from "react-native";

import Welcome from "./EcommerceApp/screens/Welcome";
// import WelcomeNew from "./EcommerceApp/screens/WelcomeNew"
// import Welcome3 from "./EcommerceApp/screens/Welcome3";
// import ProductsPage from ""

export default function App() {



  return (
    <View style={styles.container}>
      <Welcome/>
      {/* <WelcomeNew/> */}
      {/* <Welcome3/> */}
      {/* <ProductsPage/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  // buttonArea: {
  //   flexDirection: "row",
  //   textAlign: "center",
  //   justifyContent: "center",
  //   marginTop: 20,
  //   gap: 10,
  // },
  // headerContainer: {
  //   flex: 2, // statusBar + header
  // },
  // mainContainer: {
  //   flex: 9.5,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // footerContainer: {
  //   flex: 1,
  // },
});



