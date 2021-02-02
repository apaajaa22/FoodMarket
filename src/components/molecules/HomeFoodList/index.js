import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '../';
import {Gap} from '../../atoms';

const HomeFoodList = ({
  image,
  item,
  price,
  onPress,
  summary,
  rating,
  activeOpacity,
}) => {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View style={styles.page}>
        <View style={styles.content}>
          <Image source={image} style={styles.image} />
          <View style={styles.wrapper}>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.subTitle}>IDR {price}</Text>
          </View>
          {summary && !rating && (
            <Text style={styles.textSummary}>{summary} Items</Text>
          )}
          {rating && !summary && <Rating />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeFoodList;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    paddingLeft: 0,
    paddingTop: 12,
  },
  content: {alignItems: 'center', flexDirection: 'row'},
  image: {borderRadius: 8, width: 60, height: 60, overflow: 'hidden'},
  wrapper: {flex: 1, marginLeft: 12},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  textSummary: {fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8D92A3'},
});
