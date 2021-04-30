/*
*   사진 리스트와, 디테일을 navigating 하기위한 상위 네비게이터
*
*/

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PhotoList from './PhotoList';
import PhotoDetail from './PhotoDetail';



export default function Photo() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="photoList" component={PhotoList} options={{headerShown: false}} />
            <Stack.Screen name="photoDetal" component={PhotoDetail} options={{headerShown: false}} />
        </Stack.Navigator>
    )  
}

