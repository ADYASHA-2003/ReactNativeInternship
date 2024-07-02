import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ShoppingContext } from '../contexts/shoppingContext';

const CartIconBadge = ({ color, size }) => {
  const { cart } = useContext(ShoppingContext);
//   if (!Array.isArray(cart)) {
//     return null; // or handle appropriately
//   }

// if (!Array.isArray(cart) || cart.length === 0) {
//     return null; // or handle appropriately
//   }
console.log('Inside CartIcon Badge component:',Array.isArray(cart));
  const itemCount = cart.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.iconContainer}>
      <AntDesign name="shoppingcart" size={size} style={{ color: color }} />
      {itemCount > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'yellow',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartIconBadge;
