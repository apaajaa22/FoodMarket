import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FoodDummy1, IconBack} from '../../../assets';
import {getData} from '../../../utils';

const Header = ({title, subTitle, back, onPress, profile}) => {
  const [photo, setPhoto] = useState(FoodDummy1);
  useEffect(() => {
    getData('userProfile').then((res) => {
      console.log('userProfile: ', res);
      setPhoto({uri: res.profile_photo_url});
    });
  }, []);
  return (
    <View style={styles.wrapper}>
      {back && (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <View style={styles.icon}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.wrappertext}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <View>
          {profile && (
            <View>
              <Image source={photo} style={styles.image} />
            </View>
          )}
        </View>
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
  icon: {marginRight: 32},
  wrappertext: {
    flex: 1,
    marginLeft: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontFamily: 'Poppins-Medium', fontSize: 22, color: '#020202'},
  subTitle: {fontFamily: 'Poppins-Light', fontSize: 14, color: '#8D92A3'},
  image: {width: 50, height: 50},
});
