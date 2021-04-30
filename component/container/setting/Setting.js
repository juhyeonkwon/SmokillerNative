/*
*   로그아웃 페이지
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';


export default function Setting({ navigation }) {

       function logout() {
        AsyncStorage.removeItem('user_info');
        navigation.navigate({ name : 'login'});
           
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Button color="#37C56E" title="로그아웃" onPress={logout}></Button>
        </View>
    )
}