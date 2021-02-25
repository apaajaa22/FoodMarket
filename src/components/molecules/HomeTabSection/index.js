import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {HomeFoodList} from '..';
import {getFoodDataByTypes} from '../../../redux/action/home';

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

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <View style={styles.wrapperContent}>
      {newTaste.map((item) => {
        return (
          <HomeFoodList
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            item={item.name}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating={item.rate}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <View style={styles.wrapperContent}>
      {popular.map((item) => {
        return (
          <HomeFoodList
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            item={item.name}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating={item.rate}
          />
        );
      })}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <View style={styles.wrapperContent}>
      {recommended.map((item) => {
        return (
          <HomeFoodList
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            item={item.name}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating={item.rate}
          />
        );
      })}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

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
  wrapperContent: {flex: 1, paddingHorizontal: 24},
});
