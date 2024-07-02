import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ShoppingContext } from '../contexts/shoppingContext';
import { CART_ACTIONS } from '../actions/cartActions';

const TestComponent = () => {
  const { cart, cartDispatch } = useContext(ShoppingContext);

  return (
    <View>
      <Text>Cart Items: {cart.length}</Text>
      <Button 
        title="Add Item"
        onPress={() => cartDispatch({ type: CART_ACTIONS.ADD_TO_CART, payLoad: { id: cart.length + 1, name: 'Test Item' } })}
      />
    </View>
  );
};

export default TestComponent;
