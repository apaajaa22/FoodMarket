import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({textColorButton, colorButton, label, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.border(colorButton)}
      onPress={onPress}>
      <Text style={styles.text(textColorButton)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  border: (colorButton) => ({
    borderRadius: 8,
    backgroundColor: colorButton,
    padding: 12,
  }),
  text: (textColorButton) => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColorButton,
    textAlign: 'center',
  }),
});
