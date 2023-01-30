import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { About } from './restaurantDetails/About'
import MenuItem from './restaurantDetails/MenuItem'

const RestaurantDetails = () => {
  return (
    <View>
     
  <About/>
  <View style={{height:2, backgroundColor:'lightgray', marginTop:10}}></View>
  <MenuItem/>
    </View>
  )
}


export default RestaurantDetails

const styles = StyleSheet.create({})