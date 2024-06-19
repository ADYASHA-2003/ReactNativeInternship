import React from 'react';
import { View, Text } from 'react-native';

const plane = {
    manufacturer: 'Boeing',
    model: '747',
    year: 2005,
    color: 'white',
};

export default function Plane(plane){
  return (
    <View>
      <Text>Manufacturer: {plane.manufacturer}</Text>
      <Text>Model: {plane.model}</Text>
      <Text>Year: {plane.year}</Text>
      <Text>Color: {plane.color}</Text>
    </View>
  );
};

