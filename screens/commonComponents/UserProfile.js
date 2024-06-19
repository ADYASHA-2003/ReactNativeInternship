import { StyleSheet, Text, View } from 'react-native'; 

export default function UserProfile({isLoggedIn}) {
    // const isLoggedIn = true

    const name = "Jill"
    const element = <Text>Hello, {name}</Text>

    return(
    // const element1 = (
        <View>
            <Text>{isLoggedIn? element :"Guest"}!</Text>
            {isLoggedIn && (
                <View style={{ marginRight: 10 }}>
                    <Text>Logout</Text>
                </View>
            )
            }
        </View>
    )

    //returning a variable (containing jsx)
    // return element1
}

