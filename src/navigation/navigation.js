// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import {StatusBar} from 'react-native';
import RestaurantDetails from '../components/RestaurantDetails';


const Stack = createNativeStackNavigator();

const Navigation =() => {
  return (
    <NavigationContainer>
            <StatusBar animated={true} backgroundColor="black" />
      <Stack.Navigator initialRouteName='RestaurantDetails'>
      <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;