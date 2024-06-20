import React, { useState } from 'react'
import { View, Text, Button, StyleSheet,StatusBar, SectionListComponent } from 'react-native'
import Header from './screens/commonComponents/Header'
import ImageBgComponent from './screens/commonComponents/ImageBgComponent'
import Counter from './screens/commonComponents/Counter'
import TouchableComponent from './screens/commonComponents/TouchableComponent'
import TextInputComponent from './screens/commonComponents/TextInputComponent'
import Login from './screens/commonComponents/Login'
import ScrollVIewComp from './screens/commonComponents/ScrollVIewComp'
import FlatListComp from './screens/commonComponents/scrolls/FlatListComp'
import FlatListRefreshSimulation from './screens/commonComponents/scrolls/FlatListRefreshSimulation'
import Buttoncomp from './screens/commonComponents/Buttoncomp'
// import SectionListComponent from './screens/commonComponents/scrolls/SectionListComponent'

// const [showLoginPg, setShowLoginPg] = useState(true)
const onPressLogin = () =>{
  console.log('Login Handler Called');
}

const onPressRegister = () => {
  console.log('Register Handler Called');
}

export default function App() {
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
    <View style={[{flex:1,marginTop:StatusBar.currentHeight,justifyContent:'center',alignItems:'center',gap:'10px',backgroundColor:'#121212'},styles.container]}>
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


    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
    buttonArea:{
      flexDirection:'row',
      textAlign:'center',
      justifyContent:'center',
      marginTop:20,
      gap:10
  }
})
