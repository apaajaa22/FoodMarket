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

const NewTaste = () => {
  return (
    <View style={styles.wrapperContent}>
      <HomeFoodList image={FoodDummy4} item="Kopi Kamu" price="20.000" />
      <HomeFoodList image={FoodDummy2} item="Jeruk Hangat" price="20.000" />
      <HomeFoodList image={FoodDummy1} item="Caesar Salad" price="20.000" />
      <HomeFoodList image={FoodDummy3} item="Gule" price="20.000" />
    </View>
  );
};

const Popular = () => {
  return (
    <View style={styles.wrapperContent}>
      <HomeFoodList image={FoodDummy1} item="Caesar Salad" price="20.000" />
      <HomeFoodList image={FoodDummy3} item="Gule" price="20.000" />
      <HomeFoodList image={FoodDummy4} item="Kopi Kamu" price="20.000" />
      <HomeFoodList image={FoodDummy2} item="Jeruk Hangat" price="20.000" />
    </View>
  );
};

const Recommended = () => {
  return (
    <View style={styles.wrapperContent}>
      <HomeFoodList image={FoodDummy3} item="Gule" price="20.000" />
      <HomeFoodList image={FoodDummy4} item="Kopi Kamu" price="20.000" />
      <HomeFoodList image={FoodDummy1} item="Caesar Salad" price="20.000" />
      <HomeFoodList image={FoodDummy2} item="Jeruk Hangat" price="20.000" />
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
  wrapperContent: {flex: 1},
});