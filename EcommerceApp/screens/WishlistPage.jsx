import React, { useContext ,useState,useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WishList from '../commonComponents/WishList';
import { ShoppingContext } from '../contexts/shoppingContext';

const WishlistPage = () => {
    const {wishlist} = useContext(ShoppingContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wishlist</Text>
            {/* <Text style={styles.itemCount}> ({wishlist.length} Items)</Text> */}
            <WishList/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor:'white'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'gray',
    },
});

export default WishlistPage;
