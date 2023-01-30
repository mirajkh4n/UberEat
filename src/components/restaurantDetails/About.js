import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const yelpRestaurantInfo = {
    name : 'Farmhouse kitchen  thai  cuisine',
    image:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    price: '$$',
    reviews: '1500',
    rating: '4.5',
    categories: [{title: 'Thai'}, {title: 'Comfort Food'}],


}

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo;

const formatedCategories = categories.map((cat) => cat.title).join(" . ");

const description = `${formatedCategories} ${
    price ?  " . " + price: ""
}  .  . ${rating}  (${reviews}+)`;

// const image =
//   'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'

// const title = 'Farmhouse kitchen  thai  cuisine'
// const description = 'thai . comfort food . $$ . ticket'


export const About = () => {
  return (
    <View>
    <RestuarantImage image={image}/>
    <RestaurantTitle name={name}/>
    <RestaurantDescription description={description}/>
    </View>
  )
}

const RestuarantImage = ({image}) => {
    return(
      <Image source = {{uri: image}}
          style = {{width: '100%', height: 180}}
    />
    )
    
}

const RestaurantTitle = ({name}) => {
    return(
        <Text 
         style={{
            fontWeight:'700',
            fontSize:29,
            marginHorizontal:15,
            marginTop:10,
            color:'black'
        }}
        >{name}</Text>
    )
}
const RestaurantDescription = ({description}) =>{
   return(
    <Text
    style={{
        marginHorizontal:15,
        fontSize:15.5,
        marginTop:10,
        fontWeight:'400'
    }}
    >{description}</Text>
   )
}


const styles = StyleSheet.create({})