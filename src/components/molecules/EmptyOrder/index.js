import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILEmptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ILEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Find Foods"
          onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

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
