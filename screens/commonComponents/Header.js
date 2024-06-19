//Assignmnet-1 (Header Component)
import React from 'react'
import { StyleSheet,View,Text,Image} from 'react-native'

export default function Header() {

    const logoUrl = 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1718613959~exp=1718617559~hmac=0941ac6cfff1ab5c10ba284813faef467523c442acb00b377276c04d99c952d7&w=1060'
  return (
    <View style={styles.header}>
        <Image source={{uri:logoUrl}} style={{width:50,height:50}}/>
        <Text style={{fontWeight:'900', marginLeft:20, fontSize:25, color:'white'}}>DOVE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        backgroundColor:'tomato'
    }
})
