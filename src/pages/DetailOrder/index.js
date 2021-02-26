import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, DetailOrder, Gap, Header, HomeFoodList} from '../../components';
import {API_HOST} from '../../config/API';
import {getData} from '../../utils';

const detailOrder = ({route, navigation}) => {
  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then((resToken) => {
      axios
        .post(`${API_HOST.url}/transaction/${order.id}`, data, {
          headers: {Authorization: resToken.value},
        })
        .then((res) => {
          console.log('respon sukses cancel: ', res);
          navigation.reset({
            index: 0,
            routes: [{name: 'MainApp'}],
          });
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    });
  };

  const order = route.params;
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          back
          onPress={() => navigation.goBack()}
        />
        <View>
          <View style={styles.content}>
            <Gap height={16} />
            <Text style={styles.textTitle}>Item Ordered</Text>
            <HomeFoodList
              item={order.food.name}
              image={{uri: order.food.picturePath}}
              price={order.food.price}
              summary={order.quantity}
              activeOpacity={1}
              type="order-summary"
            />
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Details Transaction</Text>
              <Gap height={8} />
              <DetailOrder
                label={order.food.name}
                value={order.food.price * order.quantity}
                type="currency"
              />
              <DetailOrder label="Driver" value={50000} type="currency" />
              <DetailOrder
                label="Tax 10%"
                value={(10 / 100) * order.total}
                type="currency"
              />
              <DetailOrder
                label="Total Price"
                value={order.total}
                price
                type="currency"
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Deliver to:</Text>
              <Gap height={8} />
              <DetailOrder label="Name" value={order.user.name} />
              <DetailOrder label="Phone No" value={order.user.phoneNumber} />
              <DetailOrder label="Address" value={order.user.address} />
              <DetailOrder label="House No." value={order.user.houseNumber} />
              <DetailOrder label="City" value={order.user.city} />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Order Status</Text>
              <Gap height={8} />
              <DetailOrder
                label={`#${order.id}`}
                value={order.status}
                price={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
              />
            </View>
          </View>
          <View style={styles.button}>
            {order.status === 'PENDING' && (
              <Button
                label="Cancel My Order"
                onPress={onCancel}
                colorButton="#D9435E"
                textColorButton="white"
              />
            )}
          </View>
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default detailOrder;

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
