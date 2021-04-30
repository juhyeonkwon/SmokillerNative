import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';


export default function Home() {

    useEffect(() => {
        /*
        const getData = async () => {
            const jsonValue= await AsyncStorage.getItem('user_info');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        }

        let user = getData('user_info').then( () => {
            console.log(user)

            setState({
                id : user.id,
                name : user.name
            });
        });
        */

        AsyncStorage.getItem('user_info', (err, result) => {
            console.log(result);

            const user_info = JSON.parse(result);

            setState({
                id : user_info.id,
                name : user_info.name
            });

        })

       

    }, [])

    const [state, setState] = useState({
        id : '',
        name : ''
    });

    const {id, name} = state;


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>메인페이지, 그래프가 들어갈예정</Text>
            <Text>{id}, {name} </Text>
        </View>
    )
}