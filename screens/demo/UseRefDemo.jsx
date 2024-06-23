import React, { useEffect, useRef, useState } from 'react'
import { View,Text,TextInput,StyleSheet } from 'react-native'

export default function UseRefDemo() {
    const [count,setCount] = useState(0)
    const [noOfRerender] = useRef(0)
    const inputRef = useRef(null)

    // useEffect(()=>{
    //     inputRef.current.focus()
    // },[])

    useEffect(()=>{
        // setNoOfRerender(prevValue => prevValue + 1) --> update state(Infinite loop) --> trigeering rerender
        noOfRerender.current = noOfRerender.current + 1 
        console.log("Rendering UseRefDemo");
    })
  return (
    <View>
      <Text>Hello</Text>
      <Text>No.of rerender: {noOfRerender.current}</Text>
      <TextInput
      ref={inputRef}
        placeholder="Tap to Enter..."
        style={styles.input}
        onChangeText={text => setCount(parseInt(text))}
        value={count.toString() || 0}
        inputMode="numeric"
      />
    </View>
  )
}

const styles=StyleSheet.create({
    input:{

    }
})
