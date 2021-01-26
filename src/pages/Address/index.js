import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const Address = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's valid"
        back
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <TextInput label="Phone No." inputLabel="Type your phone number" />
        <Gap height={24} />
        <TextInput label="Address" inputLabel="Type your address" />
        <Gap height={24} />
        <TextInput label="House No." inputLabel="Type your house number" />
        <Gap height={24} />
        <Select />
        <Gap height={24} />
        <Button
          label="Sign Up Now"
          onPress={() => navigation.replace('SignUpSuccess')}
        />
      </View>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  page: {flex: 1},
  wrapper: {padding: 24, marginTop: 24, backgroundColor: 'white', flex: 1},
});
