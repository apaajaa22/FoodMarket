import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILOrderSuccess} from '../../assets';
import {Button, Gap} from '../../components';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILOrderSuccess />
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Order Other Foods"
          onPress={() => navigation.replace('MainApp')}
          colorButton="#FFC700"
          textColorButton="#020202"
        />
      </View>
      <Gap height={12} />
      <View style={styles.button}>
        <Button
          colorButton="#8D92A3"
          textColorButton="white"
          label="View My Order"
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {width: '100%', paddingHorizontal: 80},
  title: {fontSize: 20, fontFamily: 'Poppins-Regular', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
});
