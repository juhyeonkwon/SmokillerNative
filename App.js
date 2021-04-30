import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './component/auth/login'
import Container from './component/container/Container'
import Splash from './component/Splash'

export default function App() {
 
  const Stack = createStackNavigator();
  const Tap = createBottomTabNavigator();

  
  return (
    <NavigationContainer theme={{colors: { background : 'rgb(255,255,255)'}}}>
     
    <Stack.Navigator>
      <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="container" component={Container} options={{headerShown: false}} /> 
    
      
    </Stack.Navigator>
  </NavigationContainer>
  

  );
}


const styles = StyleSheet.create({
  container: {
    borderWidth : 2,
    borderRadius : 2,
    borderColor : 'gray',
    flex: 4, 
    alignItems: 'center',
    justifyContent: 'center',    
  },
  header : {
    flex : 0.5,
  },
  title : {
    flex : 0.5,
  },
  content : {
    flex : 4,
  },
  footer : {
    flex : 0.5,
  }
 
});
