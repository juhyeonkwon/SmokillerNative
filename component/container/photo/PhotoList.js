import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';





export default function PhotoList({navigation}) {

    useEffect(() => {

        getPhoto();


    }, [data]);

    const [states, setStates] = useState({
        data : '',
        loading : false,
    });


    async function getPhoto() {
        await axios.post('http://192.168.0.8:3333/api/photo/list', {page : 1}, {withCredentials : true}).then(response => {

         
            let arr = new Array();

            for(let i = 0 ; i < response.data.length; i++) {
                let temp = new Array();
                temp.push(response.data[i].id);
                temp.push(response.data[i].name);
                temp.push(response.data[i].time);
                temp.push(response.data[i].state);

                arr.push(temp);
           }

            setStates({
                data : arr,
                loading : true
            });


        }).catch(err => {
            console.log(err);
        })
    }
    

    const { data, loading } = states;
    

    const dataOnPress = (e) => {
        let clickedData = e._dispatchInstances.memoizedProps.children;


        navigation.navigate('photoDetail', {
            data : clickedData[0]
        });
    }


    return (
        <View style={styles.container}>
            <View style={{flex : 0.05}}></View>

            <ScrollView style={{flex : 0.95}}>
            
            {
            loading && 
            
            data.map(data => (
                <Text key={data[0]} onPress={dataOnPress} style={styles.text}>{data}</Text>
            ))
            }


            </ScrollView>
        
        </View>    
    )  
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});

