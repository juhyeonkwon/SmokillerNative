/*
*   회원관리 메인 컴포넌트 (버튼으로 네비하게)
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';
import { StackActions } from '@react-navigation/routers';

export default function UserMain({navigation}) {

    const register = () => {
        navigation.navigate({name : 'register'});
    }

    const manage = () => {
        navigation.navigate({name : 'manage'});
    }

    return (
        <View style={styles.container}>
            <Button title="관리자 등록" onPress={register} />
            <Button title="관리자 수정" onPress={manage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
});
