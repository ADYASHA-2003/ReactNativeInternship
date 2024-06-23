import React, { useState } from 'react'
import { Text,Dimensions,View, StatusBar,StyleSheet, SafeAreaView, FlatList,Alert } from 'react-native'

export default function FlatListComp() {
const [isRefreshing, setIsRefreshing] = React.useState(false)

const refreshList =()=>{
    setIsRefreshing(true)
    // alert("List Refreshed")
    Alert.alert("My App alerts", "Refreshed List..", [ {text: 'Back'}, {text: 'Ok'}, {text: 'Refresh'}]);
    setIsRefreshing(false)
}
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

            extraData={isRefreshing}

            horizontal={false}
            inverted={false}

            onRefresh={()=> refreshList()}
            refreshing={isRefreshing}
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