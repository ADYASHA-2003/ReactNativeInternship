import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import CustomButton from "../commonComponents/CustomButton";
import AntDesign from "react-native-vector-icons/AntDesign";

const DashBoard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}> Dashboard Screen </Text>
      <Button
        title="Click to navigate to home screen"
        onPress={() =>
          navigation.navigate("Home", {
            param1: "Home",
            param2: "SomeValue",
          })
        }
      /> */}

      <CustomButton
        icon={<AntDesign name="heart" size={20} color="#ffffff" />}
        text="Add To Wishlist"
        kind="rounded"
        onPress={() => console.log("Icon + Text CustomButton pressed")}

      />
      <CustomButton
        text="Primary"
        onPress={() => console.log("Primary CustomButton pressed")}
      />
      <CustomButton
        text="Secondary"
        variant="secondary"
        size="large"
        kind="outlined"
        onPress={() => console.log("Outlined CustomButton pressed")}
      />
        <CustomButton
        text="Rounded"
        kind="rounded"
        variant="success"
        size="medium"
        onPress={() => console.log("Outlined CustomButton pressed")}
      />
      <CustomButton
        icon={<AntDesign name="star" size={20} color="#ffffff" />}
        iconOnly
        onPress={() => console.log("Icon-only CustomButton pressed")}
      />
      <CustomButton
        text="Warning"
        variant="warning"
        size="small"
        onPress={() => console.log("Warning CustomButton pressed")}
      />
      <CustomButton
        text="Success"
        variant="success"
        size="large"
        kind="outlined"
        onPress={() => console.log("Success CustomButton pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  text: {
    fontSize: 25,
  },
});

export default DashBoard;
