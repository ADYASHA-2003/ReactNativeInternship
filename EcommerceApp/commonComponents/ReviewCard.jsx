// ReviewCard.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ReviewCard({ review }) {
  return (
    <View style={styles.reviewCard}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.reviewerName}>{review.reviewerName}</Text>
        <Text style={styles.reviewDate}>
          {new Date(review.date).toLocaleDateString()}
        </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={styles.reviewText}>{review.comment}</Text>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/11028/11028186.png'}} style={{width:25,height:25}}/>
      </View>

      <View style={{flexDirection:'row'}}>
      <AntDesign
            style={{marginHorizontal:3}}
            name="star"
            size={18}
            color="gold"
          />
      <Text style={styles.reviewRating}>Rating: {review.rating}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  reviewCard: {
    borderColor: "rgba(211, 211, 211, 0.5)",
    backgroundColor:'rgba(211, 211, 211, 0.1)',
    borderWidth:1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  reviewerName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  reviewDate: {
    fontSize: 12,
    color: "gray",
  },
  reviewText: {
    fontSize: 14,
  },
  reviewRating: {
    fontSize: 14,
    color: "green",
  },
});
