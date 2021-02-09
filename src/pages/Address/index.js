import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const Address = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        </View>
        <View style={styles.button}>
          <Button
            label="Sign Up Now"
            onPress={() => navigation.replace('SignUpSuccess')}
            colorButton="#FFC700"
            textColorButton="#020202"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  wrapper: {padding: 24, backgroundColor: 'white', flex: 1},
  button: {paddingHorizontal: 24},
});
