import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Number, Rating} from '../';

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
  statusColor,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <Number number={price} style={styles.subTitle} />
                {/* <Text style={styles.subTitle}>IDR {price}</Text> */}
              </View>
              <Rating number={rating} />
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
                <View style={styles.row}>
                  <Text style={styles.subTitle}>{orderItems} Items • </Text>
                  <Number number={price} style={styles.subTitle} />
                </View>
              </View>
            </View>
          </>
        );
      case 'past-order':
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{item}</Text>
                <View style={styles.row}>
                  <Text style={styles.subTitle}>{orderItems} Items • </Text>
                  <Number number={price} style={styles.subTitle} />
                </View>
              </View>
              <View style={styles.status}>
                <Text style={styles.date}>{formatedDate}</Text>
                <Text style={styles.statusOrder(statusColor)}>
                  {statusOrder}
                </Text>
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
  statusOrder: (statusColor) => ({
    color: statusColor,
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  }),
  row: {flexDirection: 'row', alignItems: 'center'},
});
