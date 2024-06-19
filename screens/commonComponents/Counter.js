import React, { useState } from 'react'
import { View,Text,Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0)

    //Declare variable and mapping the variable on ui needs state
    // let count=0
    const incCount=()=>{
        console.log("Inc Count Called");
        // count = count +1;

        //Incrementing using state variable
        // setCount(count + 1)

        //Good-practice : Provide callback
        setCount(prev=>{
          return prev + 1;
        })
        console.log("Currrent count:",count);
    }
  return (
    <View>
        <Text>Counter:{count}</Text>
        <Button onPress={incCount} title='Increase Count' accessibilityLabel='Increase count by 2'/>
    </View>
  )
}

export default Counter
