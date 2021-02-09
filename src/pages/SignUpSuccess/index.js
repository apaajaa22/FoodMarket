import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSignUpSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const SignUpSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILSignUpSuccess />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Find Foods"
          onPress={() => navigation.replace('MainApp')}
          colorButton="#FFC700"
          textColorButton="#020202"
        />
      </View>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {width: '100%', paddingHorizontal: 80},
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
});
