import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTab = () => {
  return (
    <View 
    style={{
        flexDirection:'row',
        margin:10,
        marginHorizontal:30,
        justifyContent:'space-between'
    }}
    >
    <Icon icon= "home" title= "Home" />
      <Icon icon="search" title='Browser' />
      <Icon icon= "shopping-bag" title='Grocery' />
      <Icon icon='receipt' title='Orders' />
      <Icon icon='user' title='Account' />

    </View>
  )
}

const Icon = ({icon, title}) => {
    return (
      <TouchableOpacity>
        <View>
          <FontAwsome5
            name={icon}
            size={25}
            style={{marginBottom: 3, alignSelf: 'center'}}
          />
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

export default BottomTab

const styles = StyleSheet.create({})