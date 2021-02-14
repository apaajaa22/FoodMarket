import Axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {useForm} from '../../utils';

const Address = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const registerReducer = useSelector((state) => state.registerReducer);
  const dispatch = useDispatch();
  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then((res) => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage('Register Success', 'success');
        navigation.replace('SignUpSuccess');
      })
      .catch((err) => {
        dispatch({type: 'SET_LOADING', value: false});
        showToast(err?.response?.data?.message);
      });
  };
  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
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
