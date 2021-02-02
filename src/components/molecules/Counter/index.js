import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAdd, IconMin} from '../../../assets';

const Counter = () => {
  const [value, setValue] = useState(14);
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.gap}>
        <IconMin />
      </TouchableOpacity>
      <Text style={styles.value}>{value}</Text>
      <TouchableOpacity style={styles.gap}>
        <IconAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  content: {flexDirection: 'row', alignItems: 'center'},
  gap: {marginHorizontal: 10},
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
