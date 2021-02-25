import axios from 'axios';
import {API_HOST} from '../../config/API';
import {getData} from '../../utils';

export const getOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    axios
      .get(`${API_HOST.url}/transaction`, {
        headers: {Authorization: resToken.value},
      })
      .then((response) => {
        console.log('response orders: ', response.data);
        dispatch({type: 'SET_ORDER', value: response.data.data.data});
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  });
};

export const getInProgress = () => (dispatch) => {
  getData('token').then((resToken) => {
    axios
      .all([
        axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
          headers: {Authorization: resToken.value},
        }),
        axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
          headers: {Authorization: resToken.value},
        }),
        axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`, {
          headers: {Authorization: resToken.value},
        }),
      ])
      .then(
        axios.spread((response1, response2, response3) => {
          const pending = response1.data.data.data;
          const success = response2.data.data.data;
          const onDelivery = response3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...onDelivery],
          });
        }),
      )
      .catch((err) => {
        console.log('error in progress: ', err.response);
      });
  });
};

export const getPastOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    axios
      .all([
        axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
          headers: {Authorization: resToken.value},
        }),
        axios.get(`${API_HOST.url}/transaction?status=DELIVERED`, {
          headers: {Authorization: resToken.value},
        }),
      ])
      .then(
        axios.spread((res1, res2) => {
          const cancelled = res1.data.data.data;
          const delivered = res2.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...cancelled, ...delivered],
          });
        }),
      )
      .catch((err) => {
        console.log('error in progress: ', err.response);
      });
  });
};
