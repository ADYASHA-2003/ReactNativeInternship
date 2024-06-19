import React, { Component } from 'react'
import { ImageBackground, Text, View,StyleSheet } from 'react-native'

const image = {uri:'https://img.freepik.com/free-vector/purple-fluid-background_53876-99561.jpg?t=st=1718616673~exp=1718620273~hmac=bb3eb974de4043e4759d72a1aff0f42a07bbd40dbba05df93cbe86983a936c65&w=740'}

const ImageBgComponent =({children})=>{
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.imageBg}>
          <Text style={{textAlign:'center',padding:20, fontSize:20}}>Welcome to Dove Labels</Text>
            <View style={styles.content}>{children}</View>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imageBg:{
    flex:1,
    justifyContent:'center'
  },
  content:{
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  }
})

export default ImageBgComponent
