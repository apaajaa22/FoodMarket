import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm} from '../../utils';
import {useSelector} from 'react-redux';
import Axios from 'axios';

const Address = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const registerReducer = useSelector((state) => state.registerReducer);

  const onSubmit = () => {
    console.log('form: ', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data register: ', data);
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then((res) => {
        console.log('res: ', res.data);
        navigation.replace('SignUpSuccess');
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it's valid"
          back
          onPress={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <TextInput
            label="Phone No."
            inputLabel="Type your phone number"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Address"
            inputLabel="Type your address"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={24} />
          <TextInput
            label="House No."
            inputLabel="Type your house number"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={24} />
          <Select
            value={form.city}
            onSelectChange={(itemValue) => setForm('city', itemValue)}
          />
          <Gap height={24} />
          <View style={styles.button}>
            <Button
              label="Sign Up Now"
              onPress={onSubmit}
              colorButton="#FFC700"
              textColorButton="#020202"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Address;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  wrapper: {padding: 24, backgroundColor: 'white', flex: 1},
});
