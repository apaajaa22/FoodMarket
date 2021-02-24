import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBackWhite} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {Counter, Number, Rating} from '../../components/molecules';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {
    id,
    name,
    picturePath,
    description,
    ingredients,
    rate,
    price,
  } = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value) => {
    console.log('value counter: ', value);
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * (totalItem * price);
    const total = totalPrice + driver + tax;

    const data = {
      item: {
        id,
        name,
        price,
        picturePath,
      },
      transaction: {
        totalItem,
        totalPrice,
        driver,
        tax,
        total,
      },
      userProfile,
    };

    console.log('data CO:', data);
    navigation.navigate('PaymentSummary', data);
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.background}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.counterSection}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Rating number={rate} />
          </View>
          <View>
            <Counter onValueChange={onCounterChange} />
          </View>
        </View>
        <Text style={styles.desc}>{description}</Text>
        <Gap height={16} />
        <Text style={styles.subTitle}>Ingredients:</Text>
        <Gap height={4} />
        <Text style={styles.desc}>{ingredients}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text style={styles.totalPrice}>Total Price:</Text>
          <Number number={totalItem * price} style={styles.priceTotal} />
          {/* <Text>IDR {totalItem * price}</Text> */}
        </View>
        <View style={styles.button}>
          <Button
            label="Order Now"
            onPress={onOrder}
            colorButton="#FFC700"
            textColorButton="#020202"
          />
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  background: {height: 330},
  iconBack: {paddingLeft: 16, paddingTop: 24},
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 26,
  },
  title: {fontFamily: 'Poppins-Regular', fontSize: 16, color: '#020202'},
  subTitle: {fontFamily: 'Poppins-Regular', fontSize: 14},
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    textAlign: 'auto',
  },
  counterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 26,
    alignItems: 'center',
    paddingBottom: 18,
  },
  totalPrice: {fontFamily: 'Poppins-Regular', fontSize: 14, color: '#8D92A3'},
  priceTotal: {fontFamily: 'Poppins-Regular', fontSize: 20},
  footerContainer: {flex: 1},
  button: {width: 163, height: 45},
});
