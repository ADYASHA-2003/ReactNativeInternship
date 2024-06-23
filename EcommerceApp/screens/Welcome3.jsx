import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/native-drawer";
import DashBoard from "./DashBoard";
import Home from "./Home";

const Drawer = createDrawerNavigator();

const Welcome3 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={DashBoard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default Welcome3;
