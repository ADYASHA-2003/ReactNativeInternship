import React, { useState } from 'react'
import { Text,Dimensions,View, StatusBar,StyleSheet, SafeAreaView, FlatList } from 'react-native'

export default function FlatListComp() {

    const renderItem=({item})=>
        <View>
            <Text>
                {item.color}
                {item.brand}
            </Text>
        </View>

        const data = [
            { brand: 'Toyota', color: 'Red', year: 2020 },
            { brand: 'Honda', color: 'Blue', year: 2018 },
            { brand: 'Ford', color: 'Black', year: 2021 }
        ]
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={data=>data.brand}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight
    }
})