import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Modal, FlatList, Image} from 'react-native';

import DropdownComponent from '../../components/Dropdown';

const NewRecipes = () => {
    const [modalVisible, setModalVisible] = React.useState(true);


    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.titleModal}>Instruções</Text>
                    <FlatList style={styles.textStyle}
                    data={[
                        {key: '1. Para assados, coloque sempre o tempo e a temperatura do forno;'},
                        {key: '2. Para bolos não esqueça de colocar o tipo/ tamanho da forma;'},
                        {key: '3. Informe sempre o tempo de cozimento;'},
                        {key: '4. Coloque as medidas de maneira detalhada: tipo de colheres (chá, café, sopa) e xícaras (chá, café, etc.), por exemplo;'},
                        {key: '5. Coloque sempre o rendimento e a validade de cada receita. '},
                    
                    ]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                    
                </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Image style={styles.buttonClose} source={require('../../assets/x-regular-24.png')}/>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Text style={styles.title}>Adicione sua receita</Text>
            <Text style={styles.subtitle}>informações</Text>

            <TextInput style={styles.inputs} placeholder={'Título'}></TextInput>
            <DropdownComponent />

            <View style={styles.boxcampos}>
                <TextInput style={styles.inputs} placeholder={'Minutos'}></TextInput>
                <TextInput style={styles.inputs} placeholder={'Porções'}></TextInput>
            </View>

            <Text style={styles.subtitle}>Adicionar ingredientes</Text>

            <TouchableOpacity style={styles.addbtn}>
                <Text style={styles.iconbtn}>+</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Preparo</Text>

            <TextInput style={styles.inputPreparo} placeholder={'Descreva o modo de preparo'}></TextInput>

            <TouchableOpacity style={styles.btnProximo}>
                <Text style={styles.iconbtn}>Próximo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    title:{
        margin: 10,
        color:'#F6AEC4',
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: 2
    },
    subtitle:{
        backgroundColor: '#C9C9C9',
        width: '100%',
        padding: 2,
        fontSize: 18,
        textAlign: 'center',
        alignItems: 'center'
    },
    inputs:{
        margin: 20,
        padding: 15,
        backgroundColor: '#F7F7F7',
        textAlign: 'center',

    }, 

    inputPreparo:{
        margin: 20,
        width: 350,
        height: 300,
        backgroundColor: '#F7F7F7',
        textAlign: 'center',
        marginLeft: 15,

    }, 

    boxcampos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        // padding: 30
    },

    addbtn:{
        backgroundColor:'#FFCBDB',
        margin: 15,
        padding: 5,
        borderRadius: '50%',
        width: 40,
        height: 40,
        alignItems: 'center',
    },
    iconbtn:{
        fontSize: 20,
        color: '#fff'
    },
    btnProximo:{
        backgroundColor: '#F6AEC4',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        margin: 50,
        borderRadius: 8,
    },


    modalView: {
        backgroundColor: '#F7F7F7',
        margin: 'auto',
        marginTop: 20,
        width: '90%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        
    
    },
    titleModal: {
        marginLeft: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#F6AEC4'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        width: 50,
        height: 50,
        margin: 'auto',
    },
    textStyle: {
        margin: 20,
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default NewRecipes;