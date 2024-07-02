import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./DashBoard";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import { StyleSheet } from "react-native";
import ProductsPage from "./ProductsPage";
import ButtonsDisplay from "./ButtonsDisplay";
import WelcomeNew from "./WelcomeNew";
import { View } from "react-native";
import shoppingContext from "../contexts/shoppingContext";

const Stack = createNativeStackNavigator();

const Welcome = () => {
  return (
    <ShoppingProvider>
    <NavigationContainer>
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="DashBoard" component={WelcomeNew}/>
        {/* <Stack.Screen name="ProductsPage" component={ProductsPage} />
        <Stack.Screen name="ButtonsDisplay" component={ButtonsDisplay} /> */}
      </Stack.Navigator>
    </View>
    </NavigationContainer>
    </ShoppingProvider>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default Welcome;
