import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Categories from '../components/Categories';
import HeaderTab from '../components/HeaderTab';
import ResturantItem, {localRestaurants} from '../components/ResturantItem';
import SearchBar from '../components/SearchBar';
import Divider from 'react-native-divider';
import BottomTab from '../components/BottomTab';


const YELP_API_KEY =
  'G7gW89KwgVDma6Wl1K-88FcFJ39x83GZbcNaQpiVZ2uoiHlaYGP9uCiZ5mkflfzaNT7ZmRxxMJyZkbliJoANipc0WPGESXW_SH16Fv-y5cGtZzCawqB7UmD2p0rUY3Yx';

const Home = () => {
  const [restuarantsData, setRestuarantsData] = useState([localRestaurants]);

  const getRestaurantsFromYelp = () => {
    const yelUrl =
    'https://api.yelp.com/v3/businesses/search?term-restuarant&location=SanDiego';

    const apiOptions = {
      headers: {
        Authorization: 'Bearer' ,YELP_API_KEY,
      },
    };
    return fetch(yelUrl, apiOptions)
      .then(res => res.json())
      .then(json => restuarantsData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <View style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItem restuarantsData={restuarantsData} />
      </ScrollView>
     
      <BottomTab/>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({});
