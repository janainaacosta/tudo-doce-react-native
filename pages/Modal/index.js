import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, FlatList, TouchableOpacity, Image } from "react-native";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
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
      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     backgroundColor: '#F7F7F7',
//     margin: 0,
//     width: 250,

//   },
//   titleModal: {
//     marginLeft: 10,
//     fontSize: 20,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: '#F6AEC4'
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     width: 50,
//     height: 50
//   },
//   textStyle: {
//     margin: 20,
//     fontSize: 15
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// import * as React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Home</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default ModalScreen;