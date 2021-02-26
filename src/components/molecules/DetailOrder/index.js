import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Number} from '..';

const DetailOrder = ({label, value, price = '#020202', type}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(price)} />
      ) : (
        <Text style={styles.value(price)}>{value}</Text>
      )}
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
    color: price,
  }),
});
