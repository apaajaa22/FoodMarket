import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, Header, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header
          profile
          img={FoodDummy4}
          title="FoodMarket"
          subTitle="Let's get some foods"
        />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.wrapper}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy4} />
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
  page: {flex: 1},
  wrapper: {flexDirection: 'row', marginTop: 24},
  tabContainer: {flex: 1},
});
