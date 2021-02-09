import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Sign Up"
          subTitle="Register and eat"
          back
          onPress={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <View style={styles.wrapperborder}>
            <View style={styles.border}>
              <View style={styles.borderPhoto}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInput label="Full Name" inputLabel="Type your full name" />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            inputLabel="Type your email address"
          />
          <Gap height={16} />
          <TextInput label="Password" inputLabel="Type your password" />
          <Gap height={24} />
        </View>
        <View style={styles.button}>
          <Button
            label="Continue"
            onPress={() => navigation.navigate('Address')}
            colorButton="#FFC700"
            textColorButton="#020202"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  wrapper: {padding: 24, backgroundColor: 'white', flex: 1},
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
  borderPhoto: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  wrapperborder: {alignItems: 'center', marginBottom: 16},
  button: {paddingHorizontal: 24},
});
