import Axios from 'axios';
import {API_HOST} from '../../config/API';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      storeData('token', {value: token});
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
          headers: {
            Authorization: token,
          },
        })
          .then((resUpload) => {
            profile.profile_photo_url = `http://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
            storeData('userProfile', profile);
            navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
          })
          .catch((failUpload) => {
            showMessage('upload foto tidak berhasil');
            navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
          });
      } else {
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
      }
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};
