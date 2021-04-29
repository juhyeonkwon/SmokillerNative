import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './component/login'
import Container from './component/Container'
import Photo from './component/photo/Photo';

export default function App() {
  const [state, setState] = useState(
    {isLogin : false,}
  );

  const {isLogin} = state;

  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={{colors: { background : 'rgb(255,255,255)'}}}>
    <Stack.Navigator>
     
      <Stack.Screen name="login" component={Login} setState={setState} options={{ }}/>
      <Stack.Screen name="container" component={Container} />
    

    {/*
      <Stack.Screen name="photo" component={Photo} />
      */}
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
