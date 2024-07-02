import React from 'react'
import { View,Button, StyleSheet, TouchableOpacity,Text } from 'react-native'

const Buttoncomp =({title, kind, variant, onPress, size,iconOnly })=> {

  const buttonStyles={
    rounded:{
      borderRadius:10,
      backgroundColor:'#a881af',
      borderWidth:1,
      borderColor:'#a881af',
      padding:'10px',
      // width:'100px',
      width: iconOnly ? 60 : (size === 'lg' ? 200 : (size === 'md' ? 120 : 100))
    },
    outlined:{
      borderColor:'violet',
      borderWidth:'2px',
      padding:'10px',
      width:'100px',
      color:'violet !important'
    }
  }

  const variantStyles={
    primary:{
      backgroundColor:'#24a0ed', 
      borderColor:'#24a0ed',
      padding:'10px',
      width:'100px',
    },
    secondary:{
      backgroundColor:'gray',  
      borderColor:'gray',
      padding:'10px',
      width:'100px',
    }
  }

  const sizeStyles={
    sm:{
      padding:'10px',
      width:'100px',
      backgroundColor:'#ffbd03',
      borderColor:'#ffbd03'
    },
    md:{
      padding:'10px',
      width:'120px',
      backgroundColor:'#dd7973',
      borderColor:'#dd7973',
    },
    lg:{
      padding:'10px',
      width:'200px',
      backgroundColor:'#ED0800',
      borderColor:'#ED0800'
    }
  }

  return (
  <View style={{marginBottom:10}}>
      {/* <TouchableOpacity style={[styles.button,buttonStyles[kind],variantStyles[variant],sizeStyles[size]]} title={title} onPress={onPress}>
        <Text style={{color:'white',textAlign:'center'}}>
          {title}
        </Text>
      </TouchableOpacity> */}
       <TouchableOpacity style={[styles.button, styles.buttonCommon, buttonStyles[kind], variantStyles[variant], sizeStyles[size]]} onPress={onPress}>
        {!iconOnly &&
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {title}
          </Text>
        }
        {iconOnly &&
          <Ionicons name="ios-heart" size={32} color="white" /> 
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#33b249',
        padding:'10px',
        width:'100px',
    }
})

export default Buttoncomp
