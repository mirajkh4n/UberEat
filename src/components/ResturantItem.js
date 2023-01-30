import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];
const ResturantItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{marginBottom: 30, }}>
      {localRestaurants.map((restaurants, index) => (
        <View
          style={{marginTop: 10, padding: 15, backgroundColor: 'white', borderRadius:30}}
          key={index}>
          <RestuarantImage image_url={restaurants.image_url} />
          <RestuarantInfo name={restaurants.name} rating={restaurants.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};
const RestuarantImage = ({image_url}) => {
  return (
    <View>
      <Image source={{uri: image_url}} style={{width: '100%', height: 200,borderRadius:10}} />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color={'white'}
        />
      </TouchableOpacity>
    </View>
  );
};
export default ResturantItem;

const RestuarantInfo = ({name, rating}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 13, color: 'gray'}}>30-40 mint</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});