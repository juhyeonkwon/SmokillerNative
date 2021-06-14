/*
*   사진의 리스트를 불러온다.
*
*/

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList, ScrollView, Dimensions, TouchableOpacity, RefreshControl } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Spinner from 'react-native-loading-spinner-overlay';

import api from '../../api'



export default function PhotoList({navigation}) {

    useEffect(() => {

        getPhoto();


    }, [data]);

    const [states, setStates] = useState({
        data : '',
        loading : false,
        widthArr : [],

    });


    async function getPhoto() {
        await axios.get(api + '/api/photo/list.json', {page : 1}, {withCredentials : true}).then(response => {

            console.log(response.data.photolist) 

            let arr = new Array();

            for(let i = 0 ; i < response.data.photolist.length; i++) {
                let temp = new Array();
                temp.push(response.data.photolist[i].idx);
                temp.push(response.data.photolist[i].time);
                if(response.data.photolist[i].process == 1) {
                    temp.push("done");
                } else {
                    temp.push("yet");
                }

                arr.push(temp);
           }

           let width1 = Dimensions.get('window').width * 0.2
           let width2 = Dimensions.get('window').width * 0.55
           let width3 = Dimensions.get('window').width * 0.2 

           setStates({
                data : arr,
                loading : true,
                widthArr : [width1, width2, width3]
            });


        }).catch(err => {
            console.log(err);
        })
    }
    

    const { data, loading, widthArr } = states;
    

    const dataOnPress = (data) => {
        console.log(data)


        navigation.navigate('photoDetail', {
            data : data
        });
    };


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
            getPhoto();
        });
    }, []);

    


    return (
        <View style={styles.container}>
            <View style={{flex : 0.05}}></View>
            <Table
                borderStyle={{ borderColor: 'gray' }}
                style={{ borderRadius: 10, width : Dimensions.get('window').width * 0.95, }}
                textStyle={{ fontSize: 16, fontFamily: 'nunito' }}
                >
                <Row
                    data={["No","Time", "State",]}
                    style={{ flexWrap: 'wrap' }}
                    textStyle={styles.headText}
                    widthArr={widthArr}
                />
                </Table>
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
                style={{ borderRadius: 10, width : Dimensions.get('window').width * 0.95, }}
                textStyle={{ fontSize: 16, fontFamily: 'nunito' }}
                >               
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
                            widthArr={widthArr}

                        />
                    </TouchableOpacity>    
                ))
                }

                </Table>
            }


            </ScrollView>

        <Spinner
          visible={!loading}
        />
        
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