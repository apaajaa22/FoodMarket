import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {showMessage, useForm} from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('Address');
  };

  const addPhoto = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        // Same code as in above section!
        console.log('Response = ', response);

        if (response.didCancel || response.error) {
          console.log('User cancelled image picker');
          showMessage('Anda tidak memilih foto');
        } else {
          const source = {uri: response.uri};
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          setPhoto(source);
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        }
      },
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          subTitle="Register and eat"
          back
          onPress={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <View style={styles.wrapperborder}>
            <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
              <View style={styles.border}>
                {photo ? (
                  <Image source={photo} style={styles.borderPhoto} />
                ) : (
                  <View style={styles.borderPhoto}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            inputLabel="Type your full name"
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            inputLabel="Type your email address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            inputLabel="Type your password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <View style={styles.button}>
            <Button
              label="Continue"
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
});
