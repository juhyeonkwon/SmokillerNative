/*
*   회원목록 컴포넌트(스크린)
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, ScrollView, TouchableOpacity, Dimensions, RefreshControl  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';

import axios from 'axios';

export default function UserList({navigation}) {

    

    useEffect(() => {

        getUser();


    }, [data]);

    const [states, setStates] = useState({
        data : '',
        loading : false,
    });
    
    const { data, loading } = states;


    async function getUser() {
        await axios.post('http://58.122.247.48:3333/api/userlist', {withCredentials : true}).then(response => {

            console.log(response.data) 

            let arr = [];

            for(let i = 0 ; i < response.data.length; i++) {
                let temp;

                switch(response.data[i].access) {
                    case 1 : temp='사원'; break;
                    case 2 : temp='관리자'; break;
                    case 3 : temp='최고관리자'; break;
                    default : break;
                }
                
                arr.push([
                    response.data[i].idx,
                    response.data[i].id,
                    response.data[i].name,
                    temp
                ]);                
           };

            setStates({
                data : arr,
                loading : true
            });


        }).catch(err => {
            console.log(err);
        })
    }

    const dataOnPress = (data) => {
        navigation.navigate('manage', {
            data : data
        });        
    }

     //새로고침 컨트롤
     const [refreshing, setRefreshing] = useState(false);

     const wait = (timeout) => {
         return new Promise(resolve => setTimeout(resolve, timeout));
       }
 
     const onRefresh = React.useCallback(() => {
         setRefreshing(true);
         setStates({
             loading : false
         });
         wait(500).then(() => {
             setRefreshing(false);
             getUser();
         });
     }, []);
 


    return (
        <View style={styles.container}>
            <View style={{flex : 0.05}}></View>

            <ScrollView 
            style={{flex : 0.95}} 
            refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
            
            {
            loading && 
            <Table
                borderStyle={{ borderColor: 'gray' }}
                style={{ borderRadius: 10, width : Dimensions.get('window').width * 0.9, }}
                textStyle={{ fontSize: 16, fontFamily: 'nunito' }}
                >
                <Row
                    data={["No","ID", "Name", "Rank",]}
                    style={{ flexWrap: 'wrap' }}
                    textStyle={styles.headText}
                    //widthArr={widthArr}
                />
                {
                data.map(data => (
                    <TouchableOpacity key={data[0]} onPress={(e) => {dataOnPress(data)}}>
                        <Row 
                            data={data}
                            key={data[0]}
                            style={{ flexWrap: 'wrap' }}
                            textStyle={styles.rowText}                  
                            idx={data.idx}
                            style={styles.row}
                        />
                    </TouchableOpacity>    
                ))
                }

                </Table>
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
    row: { 
        paddingTop : 10,
        paddingBottom : 10,
        borderBottomWidth : 0.3,
        borderBottomColor : "gray"

    },
    headText : {
        fontSize : 17,
        textAlign : 'center'

    },
    rowText : {
        fontSize : 17,
        textAlign : 'center'
    }
});
