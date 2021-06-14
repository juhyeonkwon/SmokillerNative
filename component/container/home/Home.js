import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';
import { StackActions } from '@react-navigation/routers';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import axios from 'axios';
import api from "../../api";

export default function Home({ navigation }) {

    useEffect(() => {
        
        AsyncStorage.getItem('user_info', (err, result) => {
            console.log(result);

            const user_info = JSON.parse(result);

            setState({
                id : user_info.id,
                name : user_info.name
            });

        });

    }, [])

    const [state, setState] = useState({
        id : '',
        name : '',        
    });

    const {id, name} = state;

    let data = [
        {
            date : '2021-05-29',
            count : 9
        },
        {
            date : '2021-05-30',
            count : 6
        },
        {
            date : '2021-05-31',
            count : 7
        },
        {
            date : '2021-06-01',
            count : 12
        },
    ]

   


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>반갑습니다! {name} 님!</Text>
            <Text></Text>
            <Text></Text>

            <Text>처리된 사진</Text>
            <VictoryChart width={Dimensions.get('window').width * 0.9} theme={VictoryTheme.material}>
                <VictoryBar data={data} x="date" y="count" />
            </VictoryChart>
        </View>
    )
}

