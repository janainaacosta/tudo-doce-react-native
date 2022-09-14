import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';

const Stack = createNativeStackNavigator();

const Pages = () =>{
    return(
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="NewRecipes" component={NewRecipes} /> */}
          {/* <Stack.Screen name="ModalScreen" component={ModalScreen} /> */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Pages;