import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, Header, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header profile title="FoodMarket" subTitle="Let's get some foods" />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapper}>
              <Gap width={24} />
              {food.map((itemFood) => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  wrapper: {flexDirection: 'row', marginTop: 20},
  tabContainer: {flex: 1},
});
