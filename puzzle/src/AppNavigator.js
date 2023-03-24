import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './Screens/Main';
import Puzzle from './Screens/Puzzle';

const AppNavigator = () => {

    const Stack =createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen  name='Main' component={Main} options={{headerShown:false}}  />
            <Stack.Screen  name='Puzzle' component={Puzzle} options={{headerShown:false}}  />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator