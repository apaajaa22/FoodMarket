import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '../';

const HomeFoodList = ({
  image,
  item,
  price,
  onPress,
  summary,
  rating,
  orderItems,
  activeOpacity,
  type,
  date,
  statusOrder,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
              <Rating rating={rating} />
            </View>
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
              <Text style={styles.textSummary}>{summary} Items</Text>
            </View>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.subTitle}>
                  {orderItems} Items • IDR {price}
                </Text>
              </View>
            </View>
          </>
        );
      case 'past-order':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.subTitle}>
                  {orderItems} Items • IDR {price}
                </Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.statusOrder}>{statusOrder}</Text>
              </View>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.subTitle}>IDR {price}</Text>
              </View>
              <Rating />
            </View>
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View style={styles.page}>
        <Image source={image} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default HomeFoodList;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    paddingLeft: 0,
    paddingTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {alignItems: 'center', flex: 1, flexDirection: 'row'},
  image: {borderRadius: 8, width: 60, height: 60, overflow: 'hidden'},
  wrapper: {flex: 1, marginLeft: 12},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  textSummary: {fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8D92A3'},
  status: {alignItems: 'center'},
  date: {color: '#8D92A3', fontSize: 10, fontFamily: 'Poppins-Regular'},
  statusOrder: {color: '#D9435E', fontSize: 10, fontFamily: 'Poppins-Regular'},
});
