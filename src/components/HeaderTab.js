import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const HeaderTab = () => {

    const [activeTabe, setActiveTabe] = useState('Delivery');

    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center',}}>
            <HeaderButton title={'Delivery'} btnColor='black' textColor='white' 
            activeTabe={activeTabe} setActiveTabe={setActiveTabe}/>
            <HeaderButton title={'PickUp'} btnColor='white' textColor='black' 
             activeTabe={activeTabe} setActiveTabe={setActiveTabe}/>
             

        </View>
    )
}

export default HeaderTab;

const HeaderButton = ({ title, btnColor, textColor, activeTabe, setActiveTabe }) => {
    return (

        <TouchableOpacity style={{
            backgroundColor: activeTabe === btnColor ? 'white' : 'black',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 30
        }}
        onPress ={()=> setActiveTabe(textColor)}
        >
            <Text style={{
                color: activeTabe === textColor ? 'white' : 'black',
                fontSize: 24,
                fontWeight: '900'
            }}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
})