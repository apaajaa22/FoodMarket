import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.wrapper}>
        <TextInput label="Email Address" inputLabel="Type your email address" />
        <Gap height={16} />
        <TextInput label="Password" inputLabel="Type your password here" />
        <Gap height={24} />
        <Button
          label="Sign In"
          colorButton="#FFC700"
          textColorButton="#020202"
        />
        <Gap height={12} />
        <Button
          colorButton="#8D92A3"
          textColorButton="white"
          label="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    marginTop: 24,
    flex: 1,
  },
});
