/*
*   setting 부분 최상위..
*
*/

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from './Setting'
import PasswordModify from './PasswordModify'

export default function Photo() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="setting" component={Setting} options={{headerShown: false}} />
            <Stack.Screen name="password_modify" component={PasswordModify} />
        </Stack.Navigator>
    )  
}