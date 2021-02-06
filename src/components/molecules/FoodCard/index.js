import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';

const FoodCard = ({image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.page}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('FoodDetail')}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>Cherry Healthy</Text>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    marginRight: 24,
    width: 200,
    overflow: 'hidden',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    marginBottom: 24,
    resizeMode: 'cover',
  },

  container: {padding: 12},
  image: {width: 200, height: 140},
  title: {fontFamily: 'Poppins-Regular', fontSize: 16, color: '#020202'},
});
