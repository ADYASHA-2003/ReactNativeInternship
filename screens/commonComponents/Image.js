import React from 'react'
import { StyleSheet, View, Image, Text,SafeAreaView, StatusBar, Platform } from 'react-native'

const ImageComponent = () => {
    // const reactLogo =  require("../../assets/icon.png")
    const imageUrl = 'https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2021/09/blue-crested-lizard-1.jpg?fit=900%2C495&ssl=1'
    // console.log(StatusBar.currentHeight);
    // console.log(Platform.OS)
  return (
    <SafeAreaView>
      {/* <Image source={reactLogo} style={{width:200, height:200}}/> */}
      <Image source={{uri:imageUrl}} style={{width:300, height:200}}/>
    </SafeAreaView>
  )
}

export default ImageComponent

