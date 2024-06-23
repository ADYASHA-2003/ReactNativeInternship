import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  SectionListComponent,
} from "react-native";
import Header from "./screens/commonComponents/Header";
import ImageBgComponent from "./screens/commonComponents/ImageBgComponent";
import Counter from "./screens/commonComponents/Counter";
import TouchableComponent from "./screens/commonComponents/TouchableComponent";
import TextInputComponent from "./screens/commonComponents/TextInputComponent";
import Login from "./screens/commonComponents/Login";
import ScrollVIewComp from "./screens/commonComponents/ScrollVIewComp";
import FlatListComp from "./screens/commonComponents/scrolls/FlatListComp";
import FlatListRefreshSimulation from "./screens/commonComponents/scrolls/FlatListRefreshSimulation";
import Buttoncomp from "./screens/commonComponents/Buttoncomp";
import { UserContext, initialUserState } from "./globalState/userContext";
import UserProfile from "./screens/commonComponents/UserProfile";
import CartDemo from "./screens/commonComponents/CartDemo"
import ProductsPage from "./screens/commonComponents/troveComponents/ProductsPage";
import UseRefDemo from "./screens/commonComponents/demo/UseRefDemo";
import Product from "./screens/commonComponents/demo/Product";
import ProductList from "./screens/commonComponents/demo/ProductList";
import Welcome from "./EcommerceApp/screens/Welcome";
// import SectionListComponent from './screens/commonComponents/scrolls/SectionListComponent'
import WelcomeNew from "./EcommerceApp/screens/WelcomeNew"

// const [showLoginPg, setShowLoginPg] = useState(true)

export default function App() {

const [count, setCount] = useState(0);
const [user, setUser] = useState(initialUserState);

const changeHandler = (email) => {
  console.log("Change handler called", email);
  console.log("Call Authentication Server ...");
  console.log("response from Authentication Server ...");
  // setUser({ email });
};


const onPressLogin = () => {
  console.log("Login Handler Called");
};

const onPressRegister = () => {
  console.log("Register Handler Called");
};


  return (
    // <View style={{flex:1,marginTop:StatusBar.currentHeight}}>
    //   <Header/>
    //   <ImageBgComponent>
    //     <Text>Sit amet venenatis urna cursus eget nunc scelerisque viverra. Ultrices tincidunt arcu non sodales. Pretium lectus quam id leo in vitae. In vitae turpis massa sed elementum tempus egestas sed sed. Neque volutpat ac tincidunt vitae semper quis. Est ullamcorper eget nulla facilisi etiam dignissim. Feugiat nisl pretium fusce id velit ut. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Nunc mattis enim ut tellus elementum sagittis vitae. In vitae turpis massa sed elementum. Convallis convallis tellus id interdum. Sodales neque sodales ut etiam.</Text>
    //     <View style={styles.buttonArea}>
    //       <Button title='Login' onPress={onPressLogin}/>
    //       <Button title='Register' onPress={onPressRegister}/>
    //     </View>
    //     <Counter/>
    //   </ImageBgComponent>
    // </View>
    <UserContext.Provider value={{ user, setUser }}>
    <View
      style={[
        // {
        //   flex: 1,
        //   marginTop: StatusBar.currentHeight,
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: "10px",
        //   backgroundColor: "#fff",
        // },
        styles.container,
      ]}
    >
      {/* <TouchableComponent/> */}
      {/* <TextInputComponent/> */}
      {/* <ScrollVIewComp/> */}
      {/* <FlatListComp/>
       */}
      {/* <FlatListRefreshSimulation/> */}
      {/* <SectionListComponent/> */}
      {/* <Login/> */}
      {/* <Buttoncomp title="Regular" onPress={()=>alert("Clicked a Regular Button")}/> */}
      {/* <Buttoncomp title='Primary' variant="primary" onPress={()=>{alert('Pressed primary button')}} />
          <Buttoncomp title='Secondary' variant="secondary" onPress={()=>{console.log('Pressed secondary button')}}/>
          <Buttoncomp title='Rounded' kind="rounded" size="sm" onPress={()=>{console.log('Pressed rounded button')}}/>
          <Buttoncomp title='Outlined' kind="outlined" onPress={()=>{console.log('An outlined button')}}/>
          <Buttoncomp title='Medium' size="md" onPress={()=>{console.log('Medium button')}}/>
          <Buttoncomp title='Large' size="lg" onPress={()=>{console.log('Large button')}}/> */}

      <View style={[styles.headerContainer, { backgroundColor: "green" }]}>
        <View
          style={[
            styles.statusBarContainer,
            {
              flexBasis: StatusBar.currentHeight,
              backgroundColor: "#0A79DF",
            },
          ]}
        ></View>
      </View>
      {/* Actual Header */}
      <View
        style={[
          styles.header,
          { flex: 1, justifyContent: "center", backgroundColor: "#2ecc72" },
        ]}
      >
        <UserProfile user={user} isLoggedIn={true} />
      </View>

      {/* Body */}
      <View style={[styles.mainContainer, { justifyContent: "space-around" }]}>
        {/* <Image /> */}

        <View style={[{}]}>
          {/* <TextInputComponent count={count} changeHandler={changeHandler} /> */}
          {/* <CartDemo/> */}
          <ProductsPage/>
          {/* <Product/> */}
          {/* <ProductList/> */}
          {/* <UseRefDemo/> */}
          {/* <Welcome/> */}
          {/* <WelcomeNew/> */}
        </View>
      </View>

      {/* Footer */}
      <View
        style={[styles.footerContainer, { backgroundColor: "lightgray" }]}
      ></View>
    </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  buttonArea: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
  headerContainer: {
    flex: 2, // statusBar + header
  },
  mainContainer: {
    flex: 9.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    flex: 1,
  },
});