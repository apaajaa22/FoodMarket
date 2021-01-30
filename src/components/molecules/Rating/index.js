import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconStarOff, IconStarOn} from '../../../assets';
import {Gap} from '../../atoms';

const Rating = () => {
  return (
    <View style={styles.wrapperStar}>
      <IconStarOn />
      <IconStarOn />
      <IconStarOn />
      <IconStarOn />
      <IconStarOff />
      <Gap width={4} />
      <Text>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  wrapperStar: {flexDirection: 'row', alignItems: 'center'},
});
