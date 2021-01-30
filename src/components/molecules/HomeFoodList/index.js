import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from '../';
import {Gap} from '../../atoms';

const HomeFoodList = ({image, item, price}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>{item}</Text>
          <Text style={styles.subTitle}>IDR {price}</Text>
        </View>
        <Rating />
        <Gap width={24} />
      </View>
    </View>
  );
};

export default HomeFoodList;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: 24,
    paddingTop: 12,
  },
  content: {alignItems: 'center', flexDirection: 'row'},
  image: {borderRadius: 8, width: 60, height: 60},
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
});
