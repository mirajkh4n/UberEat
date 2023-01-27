import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Categories from '../components/Categories';
import HeaderTab from '../components/HeaderTab';
import ResturantItem from '../components/ResturantItem';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <View style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItem />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
