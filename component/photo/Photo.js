import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList } from 'react-native';





export default function Photo() {
    const [states, setStates] = useState({
        data : [],
    });


    async function getPhoto() {
        await axios.post('http://192.168.0.8:3333/api/photo/list', {withCredentials : true}).then(response => {
            console.log(response.data);

            setStates({
                data : response.data,
            });

        }).catch(err => {
            console.log(err);
        })
    }
    
    getPhoto();

    const {data} = states;

    return (
        <View style={styles.container}>
            <ListViewComponent><FlatList data={data} /></ListViewComponent>

        </View>    
    )  
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1
    },
});

