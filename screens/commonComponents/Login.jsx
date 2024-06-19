import React from 'react'
import { useState } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

 const image = {uri:'https://img.freepik.com/free-psd/flat-man-character_23-2151534195.jpg?t=st=1718711633~exp=1718715233~hmac=707433f58a587abc38824a833ceeb1e16902d414613a8ce9ec57c7ed91910c68&w=1380'}

  return (

    <ImageBackground source={image} resizeMode='cover' style={styles.imageBg}>
    <View>
      <Text style={{textAlign:'center',marginBottom:30,fontSize: 30,}}>Welcome back user!!</Text>

      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={text =>{setEmail(text)}} value={email} placeholder='Enter registered email:'/>

      <Text>Password</Text>
      <TextInput  style={styles.input} secureTextEntry={true} onChangeText={text =>{setPassword(text)}} value={password} placeholder='Enter password:'/>

      <TouchableOpacity style={styles.submitBtn} onPress={()=>{
            console.log('Entered Email:',email);
            console.log('Entered Password:',password);
        }}
        onLongPress={()=>{
            console.log('OnLongPress called');
        }}>
            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>

        <Text style={{textAlign:'center',marginTop:15}}>Don't have an account? Register Now</Text>
    </View>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
    container:{
        // alignItems:'flex-end'
    },
    input:{
        height: 40,
        width: 300,
        borderWidth: 1,
        borderRadius:'5px',
        padding: 10,
        marginBottom:20
    },
    submitBtn:{
        backgroundColor: "gold",
        width: 300,
        borderColor: "gold",
        marginTop: 10,
        borderRadius:'5px',
        borderWidth: 1,
        padding: 10
    }
})

export default Login
