import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({subButton, label, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.border(subButton)}
      onPress={onPress}>
      <Text style={styles.text(subButton)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  border: (subButton) => ({
    borderRadius: 8,
    backgroundColor: subButton ? '#8D92A3' : '#FFC700',
    padding: 12,
  }),
  text: (subButton) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: subButton ? 'white' : '#020202',
    textAlign: 'center',
  }),
});
