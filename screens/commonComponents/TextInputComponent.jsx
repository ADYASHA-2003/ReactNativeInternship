import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native'

export default function TextInputComponent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name,setName] = useState("")

    // setInterval(()=>{
    //     console.log("Set Interval running....");
    // },3000)


 const image = {uri:'https://img.freepik.com/free-psd/flat-man-character_23-2151534195.jpg?t=st=1718711633~exp=1718715233~hmac=707433f58a587abc38824a833ceeb1e16902d414613a8ce9ec57c7ed91910c68&w=1380'}


    // const [user, setUser]=useState({
    //     name:"",
    //     email:"",
    //     password:""
    // })

    // const onChangeText = text =>{
    //     setInputText(text)
    // }
  return (

    <ImageBackground source={image} resizeMode='cover' style={styles.imageBg}>
    <View style={styles.container}>
        <Text style={{textAlign:'center',marginBottom:30,fontSize: 36,}}>Get Started with Us</Text>
    <Text>Name</Text>
    <TextInput  style={styles.input} onChangeText={text =>{setName(text)}} value={name} placeholder='Enter Full Name:'/>

      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={text =>{setEmail(text)}} value={email} placeholder='Enter email:'/>

      <Text>Password</Text>
      <TextInput  style={styles.input} secureTextEntry={true} onChangeText={text =>{setPassword(text)}} value={password} placeholder='Enter password:'/>

        

      
      {/* <Text>Name</Text>
      <TextInput style={styles.input} onChangeText={text =>{setUser(text)}} value={user.name} placeholder='Enter Full Name:'/>

      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={text =>{setUser(text)}} value={user.email} placeholder='Enter Email:'/>

      <Text>Password</Text>
      <TextInput  style={styles.input} secureTextEntry={true} onChangeText={text =>{setUser(text)}} value={user.password} placeholder='Enter Password:'/>

      <Text>Confirm Password</Text>
      <TextInput  style={styles.input} secureTextEntry={true} onChangeText={text =>{setUser(text)}} value={user.password} placeholder='Enter Password:'/> */}

      <TouchableOpacity style={styles.submitBtn} onPress={()=>{
            // console.log('Current Email:', email);
            // console.log('Current Password:', password);
            console.log('Entered Name:',name);
            console.log('Entered Email:',email);
            console.log('Entered Password:',password);
        }}
        onLongPress={()=>{
            console.log('OnLongPress called');
        }}>
            <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Register</Text>
        </TouchableOpacity>

        <Text style={{textAlign:'center',marginTop:15}}>Already have an account?? Login!</Text>

    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
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
