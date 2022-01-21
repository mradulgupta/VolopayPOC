import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export const Item = ({title}: {title: string}) => (
  <FastImage
    style={style.imageContainer}
    source={{
      uri: title,
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.cover}
  />
);
const style = StyleSheet.create({
  imageContainer: {
    width: '48%',
    height: 200,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },
});
