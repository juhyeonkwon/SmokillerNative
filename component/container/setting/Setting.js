/*
*   셋팅 메인 페이지
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
        navigation.reset({
            index: 0,
            routes: [{ name: 'login' }],
          });
        //navigation.navigate({ name : 'login'});
           
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button color="#37C56E" title="비밀번호 변경" onPress={() => navigation.navigate('password_modify')}></Button>
            <Button color="#37C56E" title="로그아웃" onPress={logout}></Button>
        </View>
    )
}