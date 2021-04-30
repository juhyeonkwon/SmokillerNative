/*
*   회원관리 컴포넌트(스크린)
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Manage() {

    return (
        <View style={styles.container}>
            <Text>회원 관리 페이지</Text>
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
