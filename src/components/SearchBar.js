import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const SearchBar = () => {
  return (
    <View style={{marginTop:15, flexDirection:'row'}}>
      <GooglePlacesAutocomplete 
      placeholder='Search'
      styles={{
        textInput:{
            backgroundColor:'#eee',
            borderRadius:20,
            marginTop:7,
            fontWeight:'700'
        },
        textInputContainer:{
            flexDirection:'row',
            alignItems:'center',
            marginRight:10,
            borderRadius:50,
            backgroundColor:'#eee'
        }
      }}

      renderLeftButton={()=>{
        return(
            
            <Ionicons name='location-sharp' size={24} style={{marginLeft:10}} />
        )
      }}
      renderRightButton={()=>{
        return(
            <View style={{flexDirection:'row', 
            marginRight:10, 
            backgroundColor:'white', 
            padding:9, 
            alignItems:'center', borderRadius:30}}>
                <AntDesign name='clockcircle' size={11} style={{marginRight:10}} />
                <Text>Search</Text>
                
                </View>
            
        )
      }}
      />

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})