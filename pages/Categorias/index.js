import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Categorias = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Categorias</Text>
            </View>
            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/piece-of-cake.svg')} />
                <Text style={styles.name}>Bolos e Tortas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/chocolate.svg')} />
                <Text style={styles.name}>Chocolates</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/dessert (2).svg')} />
                <Text style={styles.name}>Doces de Festa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.category}>
                <Image style={styles.icon} source={require('../../assets/gummy.svg')} />
                <Text style={styles.name}>Sobremesas</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    containerTitle:{
        margin: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color:'#C9C9C9',
        fontWeight: 'bold'
    },
    category: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: '#C9C9C9',
        margin: 15,
        textAlign: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginLeft: 25,
    },
    name: {
        fontSize: 20,
        marginRight: 95,
        color: '#9D9D9D'
    }
})

export default Categorias;