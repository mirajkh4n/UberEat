import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Divider from 'react-native-divider';

const foods =[
    {
        title: 'Beachside Bar',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
      {
        title: 'Beachside',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
      {
        title: 'Karachi Food',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
      {
        title: 'Beachside Bar',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
      {
        title: 'Beachside Bar',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
      {
        title: 'Beachside Bar',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
      {
        title: 'Beachside Bar',
        description: 'with butter lettuce tomato and souce bechamel',
        price: '$$33',
        image:
          'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630495251229-OZEAGY0IO59VY5M42KJW/shutterstock_1549680473.png',
       
      },
]

const MenuItem = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    {foods.map((food,index) =>(
   <View key={index}>
     <View style={styles.menuItemStyle}>
      <FoofInfo foods ={food}/>
      <FoodImage foods = {food}/>
    </View>
    <View style={{height:2, width:'100%', backgroundColor:'lightgray'}}/>
  
   </View>
    ))}
   </ScrollView>
  );
}

const FoofInfo = (props) => {
    return(
        <View style={{width:240, justifyContent:'space-evenly'}}>
            <Text style={styles.styleTitle}>{props.foods.title}</Text>
            <Text>{props.foods.description}</Text>
            <Text>{props.foods.price}</Text>

        </View>
    )
}

const FoodImage = (props) => {
    return(
        <View>
            <Image
            source ={{uri: props.foods.image }}
            style={{
                width:100, height:100, borderRadius:8
            }}
            />
        </View>
    )
}
export default MenuItem

const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20
    },
    styleTitle:{
        fontWeight:'700',
        fontSize:19,
        color:'black'
    }
})