import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://us.123rf.com/450wm/lux100/lux1001603/lux100160300057/54243107-illustration-of-seamless-pattern-wiht-doodle-supermarket-elements.jpg' }}
      style={styles.background}
      imageStyle={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.9, 
    // height:600
  },
});

export default BackgroundImage;
