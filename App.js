import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Navigator from './Navigation/navbar';
import Header from './components/Header';
import { Component } from 'react';
import Pages from './Navigation/pagesNavigation';
import NewRecipes from './pages/NewRecipes';
import ModalScreen from './pages/Modal';
import Home from './pages/Home';
import Receita from './pages/Receita';
import VerReceita from './pages/VerReceita';


export default function App() {
  return (
        // <NavigationContainer>
        //   <Header />
        //   <Navigator />
        // </NavigationContainer>
        // <NewRecipes />
        <VerReceita />
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



