import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';


export default function PhotoDetail({ navigation, route}) {

    useEffect(() => {
        
        axios.post('http://192.168.0.8:3333/api/photo/detail', { id : route.params.data }, {withCredentials : true}).then(response => {
            console.log(response.data);

            setState({
                data : response.data
            });

        })

    }, []);

    const [states, setState] = useState({
        data : '',
    })


    
 
    const { data } = states

    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
});