import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-elements';

const Home = () => {
    return(
        <Card> 
        <Card.Image 
          style={{ padding: 0 }} 
        /> 
        <Card.Title>Bombom de travessa</Card.Title> 
        <Card.Divider /> 
        <TouchableOpacity style={styles.btnVerReceita}>
        <Text style={styles.textButton}>Ver mais</Text>
        {/* <LottieView 
            style={styles.heartLottie}
            source={require('../../assets/animationHeart.json')}
            autoPlay
            loop
            /> */}
        </TouchableOpacity>
      </Card>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnVerReceita:{
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#F5B3C7',
        textDecorationLine: 'underline',
        textDecorationColor: '#F5B3C7',
        fontSize: 16,
    
    },
    heartLottie: {
        width:400,
        height: 400
    }


  });

export default Home;