import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy2} from '../../assets';
import {Button, DetailOrder, Gap, Header, HomeFoodList} from '../../components';

const PaymentSummary = ({navigation}) => {
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
              item="Jus Jeruk"
              image={FoodDummy2}
              price="20.000"
              summary="14"
              activeOpacity={1}
            />
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Details Transaction</Text>
              <Gap height={8} />
              <DetailOrder label="Cherry Healthy" value="IDR 18.390.000" />
              <DetailOrder label="Driver" value="IDR 20.000" />
              <DetailOrder label="Tax 10%" value="IDR 1.839.000" />
              <DetailOrder
                label="Cherry Healthy"
                value="IDR 19.390.000"
                price
              />
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.wrapper}>
              <Text style={styles.textTitle}>Deliver to:</Text>
              <Gap height={8} />
              <DetailOrder label="Name" value="Rahadian Reza R" />
              <DetailOrder label="Phone No" value="0822 1832 9375" />
              <DetailOrder label="Address" value="Permata Kopo" />
              <DetailOrder label="House No." value="D" />
              <DetailOrder label="City" value="Bandung" />
            </View>
          </View>
          <View style={styles.button}>
            <Button label="Checkout Now" />
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
