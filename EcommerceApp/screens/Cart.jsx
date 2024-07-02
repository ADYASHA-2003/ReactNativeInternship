import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CartList from '../commonComponents/CartList';

const Cart = () => {
//   useEffect(() => {
//     console.log("Inside cart page");
//   }, []);
    return (
        // <ScrollView>
                    <View style={styles.container}>
            <Text style={styles.title}>Shopping Cart</Text>
            <CartList />
        </View>
        // </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'gray'
    },
});

export default Cart;


