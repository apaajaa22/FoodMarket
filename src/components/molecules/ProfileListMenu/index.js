import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconForward} from '../../../assets';

const ProfileListMenu = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <IconForward />
    </TouchableOpacity>
  );
};

export default ProfileListMenu;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 18,
    alignItems: 'center',
  },
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
});
