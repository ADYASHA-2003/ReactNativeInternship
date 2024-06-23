import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./DashBoard";
import Home from "./Home";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor:'tomato',
    height: 80,
    paddingVertical: 10
    // paddingBottom: 10
  },
  tabBarItemStyle: {
    backgroundColor:'gold',
    marginBottom: 10
  }
};

const WelcomeNew = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={screenOptions}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () =>
            <View>
              <AntDesign name="home" size={25} style={{ color: "black" }} />
            </View>,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white"
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarLabelStyle: { fontWeight: "bold", fontSize: 15 },
          tabBarIcon: () =>
            <AntDesign
              name="dashboard"
              size={25}
              style={{ color: "black" }}
            />,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "white",
          tabBarInactiveBackgroundColor: "white"
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
};



export default WelcomeNew;


