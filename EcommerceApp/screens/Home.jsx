// import React from "react";
// import { StyleSheet, View, Text, Button } from "react-native";

// const Home = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}> Home Screen </Text>
//       <Button
//         title="Click to navigate to home screen"
//         onPress={() => navigation.navigate("Dashboard")}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     // height:500
//   },
//   text: {
//     fontSize: 25
//   }
// });

// export default Home;


import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity,  Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const { width } = Dimensions.get("window");


export default function Home({navigation,route}) {
  // const image = require('../../assets/Home.jpg')
  useEffect(()=>{
    console.log('Home');
    console.log(route.params);
    return ()=>{

    }
  },[route])
  const image =
    "https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9147.jpg?w=1060&t=st=1718803434~exp=1718804034~hmac=f90902e6dbe1cb5496700ce77b786faf76f67674c3cdb3984bd3153195d975a5";
  return (
    <View style={styles.container}>
      <Text style={{ padding: "20px", fontWeight: "600", fontSize: 15,marginBottom:25 }}>
        {" "}
        Your One-Stop Shop for All Your Needs!
      </Text>
      <Image source={{ uri: image }} style={{ width: width, height: 400,marginBottom:20 }} />
      <Text>Start Shopping With</Text>
      <Text style={{ fontWeight: "800" }}>TROVE</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login")
          console.log("Navigate to Registration Page");
        }}
        style={styles.button}
      >
        <View style={{flexDirection:'row'}}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Get Started
        </Text>
        <Icon name="arrow-forward" size={20} color="white" style={{marginTop:4,marginLeft:3}} />
        </View>

      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("ButtonsDisplay")}>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "500" }}>View Button Component</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    // width:width
  },
  button: {
    margin: 15,
    backgroundColor: "gold",
    padding: 10,
    color: "white",
    fontWeight: "bold",
    width: 250,
    alignItems: "center",
    borderRadius: 10,
  },
});
