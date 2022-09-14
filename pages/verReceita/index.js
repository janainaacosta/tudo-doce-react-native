import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const VerReceita = () => {
    return(
      <View style={styles.container}>
        <Image style={styles.fotos} source={require('../../assets/bombom-de-travessa.jpg')} />
        <Text style={styles.title}>Bombom de travessa</Text>
        <View style={styles.maincontent}>
          <View style={styles.containertop}>
            <Text style={styles.infotext}>Serve: 10 porções</Text>
            <Text style={styles.infotext}>Preparo: 30 min</Text>
          </View>

          <View style={styles.containermiddle}>
            <Text style={styles.subtitle}>Ingredientes</Text>
            <Text style={styles.instruçoes}>.250 g de chocolate meio amargo</Text>
            <Text style={styles.instruçoes}>.250 g de chocolate ao leite</Text>
            <Text style={styles.instruçoes}>.2 latas de leite condensado</Text>
            <Text style={styles.instruçoes}>.2 latas de creme de leite</Text>
            <Text style={styles.instruçoes}>.2 colheres de margarina</Text>
            <Text style={styles.instruçoes}>.2 caixas de morango </Text>
          </View>
        </View>


        <View style={styles.containerend}>
            <Text style={styles.subtitle}>Ingredientes</Text>
            <Text style={styles.instruçoes}>1- Coloque as latas de leite condensado em uma panela com a manteiga e faça uma massa como um brigadeiro mole. </Text>
            <Text style={styles.instruçoes}>2- Coloque em uma travessa e, por cima deste brigadeiro mole, coloque os morangos cortados ao meio.</Text>
            <Text style={styles.instruçoes}>3- Reserve para fazer a cobertura.</Text>
            <Text style={styles.instruçoes}>4- Para fazer a cobertura, rale o chocolate ao leite e o meio amargo e misture ao creme de leite.</Text>
            <Text style={styles.instruçoes}>5- Misture e coloque no micro-ondas durante 1 minuto.</Text>
            <Text style={styles.instruçoes}>6- Retire e mexa</Text>
            <Text style={styles.instruçoes}>7- Coloque de novo no micro-ondas por mais 1 minuto.</Text>
            <Text style={styles.instruçoes}>8- Despeje a cobertura por cima dos morangos e leve à geladeira coberta por papel-filme.</Text>
          </View>



     
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    fotos:{
      width: '100%',
      height: 200,
    },

    title:{
      color: '#F5B3C7',
      fontSize: 26,
      letterSpacing: 2,
      fontWeight: 'bold',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#F5B3C7',
    }, 

    subtitle:{
      color: '#F5B3C7',
      fontSize: 24,
      fontWeight: 500,
      textAlign: 'center',
      marginTop: 30,
    },

    containertop:{
      marginTop: 30,
      backgroundColor: '#E8E8E8',
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection:  'row',
    },

    infotext:{
      margin: 20,
      fontSize: 18,
      fontWeight: 500,
    },

    containermiddle:{
      marginTop: 30,
      backgroundColor: '#E8E8E8',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      padding: 20,
    },

    containerend:{
      marginTop: 30,
      backgroundColor: '#E8E8E8',
      justifyContent: 'center',
      display: 'flex',
      padding: 20,
    },

    instruçoes:{
      margin: 20,
      fontSize: 18,
      fontWeight: 500,
    }



  });

export default VerReceita;