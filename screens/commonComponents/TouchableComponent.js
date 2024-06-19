import React, { Component } from 'react'
import { Text, View, TouchableHighlight,TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'

const TouchableComponent=()=> {
       const logoUrl = 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1718613959~exp=1718617559~hmac=0941ac6cfff1ab5c10ba284813faef467523c442acb00b377276c04d99c952d7&w=1060'
    return (
      <View style={styles.container}>
        <Text> TouchableComponent</Text>
        <TouchableHighlight onPress={()=>{
            console.log('Touchable Highlight called');
        }}
        onLongPress={()=>{
            console.log('OnLongPress called');
        }}>
                <Image source={{uri:logoUrl}} style={{width:60,height:60}}/>
        </TouchableHighlight>

        <Text> TouchableOpacity Component</Text>
        <TouchableOpacity onPress={()=>{
            console.log('Touchable Opacity called');
        }}
        onLongPress={()=>{
            console.log('OnLongPress opacity called');
        }}>
                <Image source={{uri:logoUrl}} style={{width:60,height:60}}/>
        </TouchableOpacity>


        <Text> Touchable Native feedback Component</Text>
        <TouchableNativeFeedback onPress={()=>{
            console.log('Touchable feedback called');
        }}
        onLongPress={()=>{
            console.log('OnLongPress feedback called');
        }}>
                <Image source={{uri:logoUrl}} style={{width:60,height:60}}/>
        </TouchableNativeFeedback>

        <Text> Touchable without feedback Component</Text>
        <TouchableWithoutFeedback onPress={()=>{
            console.log('Touchable without feedback called');
        }}
        onLongPress={()=>{
            console.log('OnLongPress without feedback called');
        }}>
                <Image source={{uri:logoUrl}} style={{width:60,height:60}}/>
        </TouchableWithoutFeedback>


      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default TouchableComponent
