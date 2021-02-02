import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailOrder = ({label, value, price}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(price)}>{value}</Text>
    </View>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {fontFamily: 'Poppins-Regular', fontSize: 14, color: '#8D92A3'},
  value: (price) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: price ? '#1ABC9C' : '#020202',
  }),
});