import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell, DataTable } from 'react-native-table-component';





export default function PhotoList() {

    useEffect(() => {

        getPhoto();
        

    }, [])
    const [states, setStates] = useState({
        data : [],
    });


    async function getPhoto() {
        await axios.post('http://192.168.0.8:3333/api/photo/list', {page : 1}, {withCredentials : true}).then(response => {


         /*
            let arr = new Array();

            for(let i = 0 ; i < response.data.length; i++) {
                let temp = new Array();
                temp.push(response.data[i].id);
                temp.push(response.data[i].name);
                temp.push(response.data[i].time);
                temp.push(response.data[i].state);

                arr.push(temp);
            }

            console.log(arr);
            */

            console.log(response.data)
            setStates({
                data : response.data,
            });

        }).catch(err => {
            console.log(err);
        })
    }
    

    const {data} = states;

    const colums = [
        {
            name : 'No',
            selector : 'id',
        },
        {
            name : 'Name',
            selector : 'name',
        },
        {
            name : 'Time',
            selector : 'time',
        },
        {
            name : 'State',
            selector : 'state'
        }
    ]

    return (
        <View style={styles.container}>
                     <Text>ㅇㅅㅇ</Text>


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

