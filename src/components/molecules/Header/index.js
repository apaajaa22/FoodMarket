import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack} from '../../../assets';

const Header = ({title, subTitle, back, onPress}) => {
  return (
    <View style={styles.wrapper}>
      {back && (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <IconBack />
        </TouchableOpacity>
      )}
      <View style={styles.wrappertext}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    paddingTop: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrappertext: {flex: 1, marginLeft: 32},
  title: {fontFamily: 'Poppins-Medium', fontSize: 22, color: '#020202'},
  subTitle: {fontFamily: 'Poppins-Light', fontSize: 14, color: '#8D92A3'},
});
