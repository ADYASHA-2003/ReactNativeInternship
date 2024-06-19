import { StyleSheet, Text, View } from 'react-native'; 

export const cars = [
    { brand: 'Toyota', color: 'Red', year: 2020 },
    { brand: 'Honda', color: 'Blue', year: 2018 },
    { brand: 'Ford', color: 'Black', year: 2021 }
  ];
  

export default function Car({brand, color, year, brakeHandler}) {
    const isLoggedIn = false
    const element2 = (
        <View>
            <Text>Hello, {isLoggedIn?"User":"Guest"}!</Text>
            {isLoggedIn && (
                <View>
                    <Text>Logout</Text>
                </View>
            )
            }
        </View>
    )

    const element1 = (
        //Expressing childrem
        <View>
            <Text>
                JSX Element
            </Text>
        </View>
    )

    return (
        <View>
            {/* {element2} */}
            {/* <Text>{element1}</Text> */}
            <Text onPress={brakeHandler}>Brand: {brand}</Text>
            <Text>Color: {color}</Text>
            <Text>Year: {year}</Text>
        </View>
    );
}

