/*
*   가장 처음 로딩할때 보여지는 화면
*   로그인이 되어있는지 아닌지 체크를 해서 되어있으면 바로 home으로 아니면 login 페이지로 이동하게함
*/

import React from 'react'
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Splash( {navigation} ) {

    useEffect( () => {
        setTimeout(() => {
            //AsyncStorage에 user_id 값이 있는지 체크합니다.
            //값이 없으면 login 스크린으로 navigating
            //값이 있으면 Container 스크린으로 navigating

            AsyncStorage.getItem('user_info', (err, result) => {
                if(result === null) {
                    navigation.navigate({name : 'login'});
                } else {
                    navigation.navigate({name : 'container'})
                }
            });

        }, 2000)
    }, []);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            
            <Text>첫 화면</Text>


        </View>
    )

}