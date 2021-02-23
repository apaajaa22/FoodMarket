import Axios from 'axios';
import {showMessage} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'http://foodmarket-backend.buildwithangga.id/api',
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  Axios.post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        Axios.post(`${API_HOST.url}user/photo`, photoForUpload, {
          headers: {
            Authorization: `${res.data.data.token_type} ${res.data.data.access_token} `,
          },
        })
          .then((resUpload) => {
            console.log('success upload: ', resUpload);
          })
          .catch((failUpload) => {
            showMessage('upload foto tidak berhasil');
          });
      }
      dispatch(setLoading(false));
      showMessage('Register Success', 'success');
      navigation.replace('SignUpSuccess');
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};
