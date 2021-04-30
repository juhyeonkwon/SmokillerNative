import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Photo from './photo/Photo';
import { useEffect } from 'react';
import Home from './home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserTopNav from './user/UserTopNav';
import Setting from './setting/Setting';



const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator(); 
  
export default function Container() {
  useEffect(() => {
    
    
    
  
  })
    return (
        <Tab.Navigator>
          <Tab.Screen name="home" component={Home} options={{headerShown: false}}/>
          <Tab.Screen name="Photo" component={Photo} options={{headerShown: false}}/>
          <Tab.Screen name="User" component={UserTopNav} options={{headerShown: false}}/>
          <Tab.Screen name="Settings" component={Setting} options={{headerShown: false}}/>
        </Tab.Navigator>
    )


    /*
    const styles = StyleSheet.create({ 
        
        
    )}


*/
};
