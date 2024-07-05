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
// import Splash from "./Splash";

const Stack = createNativeStackNavigator();

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/> */}
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="DashBoard" component={WelcomeNew} options={{headerShown:false}}/>
        {/* <Stack.Screen name="ProductsPage" component={ProductsPage} />
        <Stack.Screen name="ButtonsDisplay" component={ButtonsDisplay} /> */}
      </Stack.Navigator>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default Welcome;
