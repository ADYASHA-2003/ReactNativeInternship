import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DashBoard from "./DashBoard";
import Home from "./Home";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Cart from "./Cart";
import Account from "./Account";
import { ShoppingContext } from "../contexts/shoppingContext";
import { useContext, useState, useEffect, useMemo } from "react";
import ProductsStackScreen from "../stackScreens/ProductsStackScreens";
import WishlistPage from "./WishlistPage";
import ProfileStackScreen from "../stackScreens/ProfileStackScreen";
import CartIconBadge from "../commonComponents/CartIconBadge";
import CartStackScreens from "../stackScreens/CartStackScreens";
import MainHome from "./MainHome";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    height: 80,
    paddingVertical: 10,
  },
  tabBarItemStyle: {
    marginBottom: 10,
  },
};

const WelcomeNew = () => {
  const { cart, wishlist } = useContext(ShoppingContext);

  // console.log(wishlist.length);
  // const wishlistItemCount = wishlist.length;
  // const wishlistItemCount = wishlist.reduce((total, item) => total + item.quantity, 0);

  // const { cart } = useContext(ShoppingContext);
  // const cartItemsCount = cart.cart.length;
  // useEffect(() => {
  //   console.log("Length of cart inside welcome new: ", cart.cart.length);
  //   return () => {};
  // }, []);

  return (
    <ShoppingProvider>
      {/* <NavigationContainer> */}
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={MainHome}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => (
                <View>
                  <AntDesign
                    name="home"
                    size={25}
                    style={{ color: "black" }}
                  />
                </View>
              ),
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
              tabBarActiveBackgroundColor: "white",
              tabBarInactiveBackgroundColor: "white",
            }}
          />
          <Tab.Screen
            name="Wishlist"
            component={WishlistPage}
            options={{
              tabBarLabel: "Wishlist",
              tabBarIcon: () => (
                <AntDesign name="hearto" size={25} style={{ color: "black" }} />
              ),
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
              tabBarActiveBackgroundColor: "white",
              tabBarInactiveBackgroundColor: "white",
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsStackScreen}
            options={{
              tabBarLabel: "Products",
              tabBarIcon: () => (
                <View style={{ position: "relative" }}>
                  <AntDesign
                    name="slack-square"
                    size={25}
                    style={{ color: "black" }}
                  />
                  {/* {wishlistItemCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{wishlistItemCount}</Text>
                    </View>
                  )} */}
                </View>
              ),
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
              tabBarActiveBackgroundColor: "white",
              tabBarInactiveBackgroundColor: "white",
            }}
          />
          <Tab.Screen
            name="Account"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: () => (
                <AntDesign name="user" size={25} style={{ color: "black" }} />
              ),
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
              tabBarActiveBackgroundColor: "white",
              tabBarInactiveBackgroundColor: "white",
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStackScreens}
            options={{
              tabBarLabel: "Cart",
              tabBarIcon: ({ color, size }) => (
                // <AntDesign name="shoppingcart" size={25} style={{ color: "black" }} />
                <View style={{ position: "relative" }}>
                  <AntDesign name="shoppingcart" size={size} color={color} />
                  {/* {cartItemsCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{cartItemsCount}</Text>
                    </View>
                  )} */}
                  {/* <CartIconBadge/> */}
                </View>
              ),
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
              tabBarActiveBackgroundColor: "white",
              tabBarInactiveBackgroundColor: "white",
            }}
          />
          {/* <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => <CartIconBadge color={color} size={size} />,
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            tabBarActiveBackgroundColor: "white",
            tabBarInactiveBackgroundColor: "white",
          }}
          /> */}
        </Tab.Navigator>
      {/* </NavigationContainer> */}
    </ShoppingProvider>
  );
};

// const styles = StyleSheet.create({
//   badge: {
//     position: "absolute",
//     top: -5,
//     right: -8,
//     backgroundColor: "red",
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   badgeText: {
//     color: "yellow",
//     fontSize: 12,
//     fontWeight: "bold",
//   },
// });

export default WelcomeNew;
