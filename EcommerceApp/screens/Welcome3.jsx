import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/native-drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';
import DashBoard from "./DashBoard";
import Home from "./Home";

const Drawer = createDrawerNavigator();

const screenOptions ={
  drawerStyle:{
    backgroundColor:'#c6cbef',
    width:260,
    paddingTop:50,
    padddingHorizontal:20
  },
  drawerItemStyle: {
    backgroundColor: 'gold',

  },
  drawerContentStyle:{
    backgroundColor: 'tomato',
  }
}

const Welcome3 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Home",
            drawerLabelStyle: { fontWeight: "bold", fontSize: 15 },
            drawerIcon: () => (
              <AntDesign
                name="home"
                size={25}
                style={{ color: "black" }}
              />
            ),
            drawerActiveTintColor: "blue",
            drawerInactiveTintColor: "gray",
            drawerActiveBackgroundColor: "white",
            drawerInactiveBackgroundColor: "white",
          }}
        />
        <Drawer.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            drawerLabel: "Dashboard",
            drawerLabelStyle: { fontWeight: "bold", fontSize: 15 },
            drawerIcon: () => (
              <AntDesign
                name="dashboard"
                size={25}
                style={{ color: "black" }}
              />
            ),
            drawerActiveTintColor: "blue",
            drawerInactiveTintColor: "gray",
            drawerActiveBackgroundColor: "white",
            drawerInactiveBackgroundColor: "white",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Welcome3;
