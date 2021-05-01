/*
*   메인 컨테이너 최상위 네비게이터
*
*/

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
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator(); 
const Stack = createStackNavigator(); 
  
export default function Container() {

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Photo') {
              return (
                <Ionicons
                  name={focused ? 'camera' : 'camera-outline'}
                  size={size}
                  color={color}
                />
              );              
            } else if (route.name === 'User') {
              return (
                <Ionicons
                  name={focused ? 'man' : 'man-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#37C56E',
          inactiveTintColor: 'gray',
        }}>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Tab.Screen name="Photo" component={Photo} options={{headerShown: false}}/>
          <Tab.Screen name="User" component={UserTopNav} options={{headerShown: false}}/>
          <Tab.Screen name="Settings" component={Setting} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
};
