// import React, { useEffect } from 'react'
// import { View,Text ,StyleSheet,Image} from 'react-native'

// export default function Product({item}) {
//     useEffect(()=>{

//     })
//   return (
//     <View style={styles.productContainer}>
//         <View>
//             <Image
//                 style={{width:200,height:300}}
//                 source={{
//                     uri: item?.images[0]
//                 }}
//             />
//         </View>
//     </View>
//   )
// }

// const styles= StyleSheet.create({productContainer:{
//     boxShadow :'rgba(0,0,0,0.2) 0px 0px 0px',
//     backgroundColor:'rgba(255,255,255)',
//     borderWidth:1,
//     padding:15,
//     marginTop:15
//  }    
// })


import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Product({ product }) {
  const imageUrl = product?.images?.[0] || 'https://via.placeholder.com/200x300.png?text=No+Image';

  return (
    <View style={styles.productContainer}>
      <View>
        <Image
          style={styles.productImage}
          source={{ uri: imageUrl }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // for Android shadow
    backgroundColor: 'rgba(255,255,255)',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginTop: 15,
    // gap:10
  },
  productImage: {
    width: 150,
    height: 200,
  },
});
