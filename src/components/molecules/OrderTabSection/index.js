import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {HomeFoodList} from '..';
import {FoodDummy1, FoodDummy2} from '../../../assets';
import {getInProgress, getPastOrders} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, []);
  return (
    <View style={styles.wrapperContent}>
      {inProgress.map((order) => {
        return (
          <HomeFoodList
            key={order.id}
            image={{uri: order.food.picturePath}}
            item={order.food.name}
            price={order.total}
            orderItems={order.quantity}
            activeOpacity={0.8}
            type="in-progress"
            onPress={() => navigation.navigate('DetailOrder')}
          />
        );
      })}
    </View>
  );
};

const PostOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector((state) => state.orderReducer);
  useEffect(() => {
    dispatch(getPastOrders());
  }, []);
  return (
    <View style={styles.wrapperContent}>
      {pastOrders.map((pastOrder) => {
        return (
          <HomeFoodList
            type="past-order"
            key={pastOrder.id}
            image={{uri: pastOrder.food.picturePath}}
            item={pastOrder.food.name}
            price={pastOrder.total}
            orderItems={pastOrder.quantity}
            date={pastOrder.created_at}
            statusOrder={pastOrder.status}
            activeOpacity={1}
          />
        );
      })}
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
