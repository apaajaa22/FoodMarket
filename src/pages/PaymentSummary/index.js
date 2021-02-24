import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  DetailOrder,
  Gap,
  Header,
  HomeFoodList,
  Loading,
} from '../../components';
import {API_HOST} from '../../config/API';
import {getData} from '../../utils';
import {WebView} from 'react-native-webview';

const PaymentSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  useEffect(() => {
    getData('token').then((res) => {
      console.log('res token: ', res);
      setToken(res.value);
    });
  }, []);

  const onCheckOut = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };
    axios
      .post(`${API_HOST.url}/checkout`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log('response: ', response.data);
        setIsPaymentOpen(true);
        setPaymentURL(response.data.data.payment_url);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };
  const onNavChange = (state) => {
    console.log('nav', state);
    const urlSuccess =
      'http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=2268&status_code=201&transaction_status=pending';
    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      navigation.replace('OrderSuccess');
    }
  };
  if (isPaymentOpen) {
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          back
          onPress={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Order Summary"
          subTitle="You deserve better meal"
          back
          onPress={() => navigation.goBack()}
        />
        <View>
          <View style={styles.content}>
            <Gap height={16} />
            <Text style={styles.textTitle}>Item Ordered</Text>
            <HomeFoodList
              item={item.name}
              image={{uri: item.picturePath}}
              price={item.price}
              summary={transaction.totalItem}
              activeOpacity={1}
              type="order-summary"
            />
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Details Transaction</Text>
              <Gap height={8} />
              <DetailOrder
                label={item.name}
                value={transaction.totalPrice}
                type="currency"
              />
              <DetailOrder
                label="Driver"
                value={transaction.driver}
                type="currency"
              />
              <DetailOrder
                label="Tax 10%"
                value={transaction.tax}
                type="currency"
              />
              <DetailOrder
                label="Total Price"
                value={transaction.total}
                price
                type="currency"
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Deliver to:</Text>
              <Gap height={8} />
              <DetailOrder label="Name" value={userProfile.name} />
              <DetailOrder label="Phone No" value={userProfile.phoneNumber} />
              <DetailOrder label="Address" value={userProfile.address} />
              <DetailOrder label="House No." value={userProfile.houseNumber} />
              <DetailOrder label="City" value={userProfile.city} />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              label="Checkout Now"
              onPress={onCheckOut}
              colorButton="#FFC700"
              textColorButton="#020202"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  page: {flex: 1},
  textTitle: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
  content: {
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  wrapper: {paddingVertical: 16},
  button: {paddingHorizontal: 24, marginTop: 24},
});
