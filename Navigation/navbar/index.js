import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Receita from "../../pages/Receita";
import Home from "../../pages/Home";
import Categorias from "../../pages/Categorias";
import NewRecipes from "../../pages/NewRecipes";
import verReceita from "../../pages/verReceita";



const Tab = createMaterialTopTabNavigator();

const Navigator = () => {
  return (
      <Tab.Navigator  
        screenOptions={{
          tabBarStyle: { backgroundColor: '#FFCBDB' },
          tabBarIndicatorStyle: {color: "#fff"},
          tabBarActiveTintColor:  "#fff"
        }}
        >
        <Tab.Screen 
          options={{
            title: ({ color, focused }) => 
            <FontAwesome size={25} name="home"
            color={focused ? '#fff' : 'black' }
            /> 
          }} 
          name="Home" component={verReceita} 
        />

        <Tab.Screen 
          options={{
            title: ({ color, focused }) => 
            <MaterialCommunityIcons size={25} name="cupcake"
            color={focused ? '#fff' : 'black' }
            /> 
          }} 
        name="Categorias" component={Categorias} />
        
      </Tab.Navigator>
  );
}




export default Navigator;