import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WishList from '../commonComponents/WishList';

const WishlistPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wishlist</Text>
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
