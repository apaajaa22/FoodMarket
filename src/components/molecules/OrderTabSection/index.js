import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {HomeFoodList} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.page}
    tabStyle={styles.Tab}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.text(focused)}>{route.title}</Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperContent}>
      <HomeFoodList
        image={FoodDummy4}
        item="Kopi Kamu"
        price="20.000"
        orderItems={1}
        activeOpacity={0.8}
        type="in-progress"
        onPress={() => navigation.navigate('DetailOrder')}
      />
      <HomeFoodList
        image={FoodDummy2}
        item="Jeruk Hangat"
        price="20.000"
        orderItems={1}
        type="in-progress"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailOrder')}
      />
      <HomeFoodList
        image={FoodDummy1}
        item="Caesar Salad"
        price="20.000"
        orderItems={1}
        type="in-progress"
        activeOpacity={0.8}
      />
      <HomeFoodList
        image={FoodDummy3}
        item="Gule"
        price="20.000"
        orderItems={1}
        type="in-progress"
        activeOpacity={0.8}
      />
    </View>
  );
};

const PostOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperContent}>
      <HomeFoodList
        image={FoodDummy1}
        item="Caesar Salad"
        price="20.000"
        type="past-order"
        orderItems={1}
        date="Jun 12, 14:00"
        statusOrder="Cancelled"
        activeOpacity={1}
      />
      <HomeFoodList
        image={FoodDummy3}
        item="Gule"
        price="20.000"
        type="past-order"
        date="Jun 12, 14:00"
        orderItems={1}
        activeOpacity={1}
      />
      <HomeFoodList
        image={FoodDummy4}
        item="Kopi Kamu"
        price="20.000"
        type="past-order"
        date="Jun 12, 14:00"
        orderItems={1}
        activeOpacity={1}
      />
      <HomeFoodList
        image={FoodDummy2}
        item="Jeruk Hangat"
        price="20.000"
        type="past-order"
        date="Jun 12, 14:00"
        statusOrder="Cancelled"
        orderItems={1}
        activeOpacity={1}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Post Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PostOrders,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'black',
    height: 2,
    width: '15%',
    marginLeft: '3%',
  },
  page: {backgroundColor: 'white'},
  Tab: {width: 'auto'},
  text: (focused) => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  wrapperContent: {flex: 1, paddingHorizontal: 24, backgroundColor: 'white'},
});
