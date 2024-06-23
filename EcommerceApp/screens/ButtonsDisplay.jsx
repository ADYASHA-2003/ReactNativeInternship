import React from "react";
import { View, Dimensions } from "react-native";
import Buttoncomp from "../commonComponents/Buttoncomp";

const { width } = Dimensions.get("window");


export default function ButtonsDisplay() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:width,backgroundColor:'black'}}>
      <Buttoncomp
        title="Regular"
        onPress={() => alert("Clicked a Regular Button")}
      />
      <Buttoncomp
        title="Primary"
        variant="primary"
        onPress={() => {
          alert("Pressed primary button");
        }}
      />
      <Buttoncomp
        title="Secondary"
        variant="secondary"
        onPress={() => {
          console.log("Pressed secondary button");
        }}
      />
      <Buttoncomp
        title="Rounded"
        kind="rounded"
        size="sm"
        onPress={() => {
          console.log("Pressed rounded button");
        }}
      />
      <Buttoncomp
        title="Outlined"
        kind="outlined"
        onPress={() => {
          console.log("An outlined button");
        }}
      />
      <Buttoncomp
        title="Medium"
        size="md"
        onPress={() => {
          console.log("Medium button");
        }}
      />
      <Buttoncomp
        title="Large"
        size="lg"
        onPress={() => {
          console.log("Large button");
        }}
      />
    </View>
  );
}
