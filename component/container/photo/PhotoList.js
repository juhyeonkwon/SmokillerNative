import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ListViewComponent, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';





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
        await axios.post('http://192.168.0.8:3333/api/photo/list', {page : 1}, {withCredentials : true}).then(response => {

            console.log(response.data) 

            let arr = new Array();

            for(let i = 0 ; i < response.data.length; i++) {
                let temp = new Array();
                temp.push(response.data[i].idx);
                temp.push(response.data[i].time);
                temp.push(response.data[i].process);

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


    return (
        <View style={styles.container}>
            <View style={{flex : 0.05}}></View>

            <ScrollView style={{flex : 0.95}}>
            
           

            {
            loading && 
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
        paddingTop : 7,
        paddingBottom : 7,
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