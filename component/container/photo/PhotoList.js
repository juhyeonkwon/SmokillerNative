import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';





export default function PhotoList() {

    useEffect(() => {

        getPhoto();
        

    }, [])
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
    

    const {data} = states;

    return (
        <View style={styles.container}>
            <Text>사진 리스트</Text>
        </View>    
    )  
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1
    },
});

