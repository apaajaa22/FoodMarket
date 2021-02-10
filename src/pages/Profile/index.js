import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {UserDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profile = ({name, email}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperborder}>
          <View style={styles.border}>
            <View style={styles.borderPhoto}>
              <Image source={UserDummy} style={styles.image} />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Rahadian Reza</Text>
            <Text style={styles.email}>reza@email.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapperTab}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FAFAFC'},
  wrapperContent: {backgroundColor: 'white'},
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    textAlign: 'center',
  },
  border: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
    paddingBottom: 10,
  },
  wrapperborder: {alignItems: 'center', marginBottom: 16, marginTop: 26},
  name: {fontFamily: 'Poppins-Regular', color: '#020202', fontSize: 18},
  email: {fontFamily: 'Poppins-Regular', color: '#8D92A3', fontSize: 14},
  wrapperTab: {flex: 1, marginTop: 24},
});
