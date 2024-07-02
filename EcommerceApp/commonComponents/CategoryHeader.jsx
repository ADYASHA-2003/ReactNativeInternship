// Header.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet ,Image} from 'react-native';
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// import { AntDesign } from '@expo/vector-icons';

const CategoryHeader = ({ categories, onCategorySelect }) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={{width:20,height:20,alignSelf:'center',borderColor:'blue',marginRight:2}} source={{uri:'https://cdn-icons-png.freepik.com/256/10302/10302722.png?ga=GA1.1.1400458909.1718434298&semt=ais_hybrid'}}/>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.categoryButton}
          onPress={() => onCategorySelect(category)}
        >
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  categoryButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#007bff',
    // backgroundColor: "black",
  },
  categoryButtonText: {
    color: '#fff',
  },
});

export default CategoryHeader;
