/*
*   회원등록 컴포넌트(스크린)
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';
import { StackActions } from '@react-navigation/routers';

export default function Register() {

    return (
        <View style={styles.container}>
            <Text>회원 등록 페이지</Text>
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
