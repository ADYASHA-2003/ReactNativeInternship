import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import CheckoutSummary from '../screens/CheckoutSummary';
import PaymentScreen from '../screens/PaymentScreen';
import Orders from '../screens/Orders';

const CartStack = createNativeStackNavigator();

const CartStackScreens = () => {
  return (
    <CartStack.Navigator initialRouteName="Cart">
      <CartStack.Screen name="YourCart" component={Cart} options={{headerShown:false}}/>
      <CartStack.Screen name="CheckoutSummary" component={CheckoutSummary} options={{headerTitle:'',headerTransparent:true}}/>
      <CartStack.Screen name="PaymentScreen" component={PaymentScreen} options={{headerTitle:'',headerTransparent:true}}/>
      <CartStack.Screen name="Orders" component={Orders} options={{headerTitle:'',headerTransparent:true}}/>
    </CartStack.Navigator>
  );
};

export default CartStackScreens;
