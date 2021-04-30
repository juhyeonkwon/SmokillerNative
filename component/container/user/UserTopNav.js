/*
*   회원관리 Top 네비게이터
*   스크린들을 관리한다람쥐..
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';
import { StackActions } from '@react-navigation/routers';
import { createStackNavigator } from '@react-navigation/stack';
import UserMain from './UserMain';
import Register from './Register';
import Manage from './Manage';

export default function UserTopNav() {

    const Stack = createStackNavigator();


    return( 
        <Stack.Navigator>
            <Stack.Screen name="User" component={UserMain} options={{headerShown: false}} />
            <Stack.Screen name="register" component={Register}  />
            <Stack.Screen name="manage" component={Manage}  />
        </Stack.Navigator>
    )


}