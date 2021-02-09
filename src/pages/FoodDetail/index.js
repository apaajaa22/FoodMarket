import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy5, IconBackWhite} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {Counter, Rating} from '../../components/molecules';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy5} style={styles.background}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.counterSection}>
          <View>
            <Text style={styles.title}>Cherry Healthy</Text>
            <Rating />
          </View>
          <View>
            <Counter />
          </View>
        </View>
        <Text style={styles.desc}>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
          pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
          teratur.
        </Text>
        <Gap height={16} />
        <Text style={styles.subTitle}>Ingredients:</Text>
        <Gap height={4} />
        <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text>Total Price:</Text>
          <Text>IDR 12.289.000</Text>
        </View>
        <View style={styles.button}>
          <Button
            label="Order Now"
            onPress={() => navigation.navigate('PaymentSummary')}
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
  footerContainer: {flex: 1},
  button: {width: 163, height: 45},
});
