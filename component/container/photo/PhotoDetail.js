/*
*   사진자세한정보를 볼수 있고, 사진처리를 할 수 있다.
*
*/
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Dimensions, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../api';

export default function PhotoDetail({ navigation, route}) {

    useEffect(() => {
        
        axios.post('http://58.122.247.48:3333/api/photo/detail', { id : route.params.data[0], process : route.params.data[2] }, {withCredentials : true}).then(response => {

            //만약 처리가 안되있으면.. 로그인한사람의 이름이 자동으로 들어가게 한다.
            if(response.data[0].process == 0 ) {
                    
                AsyncStorage.getItem('user_info', (err, result) => {

                    const user_info = JSON.parse(result);

                    response.data[0].name = user_info.name
        
                    setState({
                        data : response.data[0],
                        user_id : user_info.idx
                    });        

                })    
            } else {
                setState({
                    data : response.data[0]
                });
            }     
        });

    }, []);

    const [states, setState] = useState({
        data : '',
        user_id : '',
    });

 
    const { data, user_id } = states

    const [ processData, setProcessData ] = useState({
        smoke : 1,
        comment : '',
    });

    const {smoke, comment} = processData;

    const onClick = () => {

        axios.post(api + '/api/photo/proceed', {photo_idx : data.idx, user_idx : parseInt(user_id), smoking : smoke, comment : comment}, {withCredentials : true}).then(response => {
            if(response.data.suceed === 1) {
                Alert.alert('알림', '처리가 완료되었습니다. 새로고침을 해주세요.')
            } else {
                Alert.alert('알림', '에러가 발생했습니다.')
            }

            navigation.goBack();
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <KeyboardAvoidingView
              //behavior={Platform.OS === "ios" ? "padding" : "height"}
              behavior="position"
              style={styles.container}
        >

        <ScrollView contentContainerStyle={{width : Dimensions.get('window').width, alignItems: 'center',}} >
        
            <Image 
             style={styles.img}
             source={{
                uri: api + data.src,
                }}
              />

            <Text style={styles.label}>No</Text>
            <Text style={data.process == 1 ? styles.input : styles.inputReadonly} >{data.idx}</Text>

            <Text style={styles.label}>Time</Text>
            <Text style={data.process == 1 ? styles.input : styles.inputReadonly} >{data.time}</Text>

            <Text style={styles.label}>Location</Text>
            <Text style={data.process == 1 ? styles.input : styles.inputReadonly}>{data.location}</Text>

            <Text style={styles.label}>처리여부</Text>
            <Text style={data.process == 1 ? styles.input : styles.inputReadonly}>{data.process == 0 ? "NO" : "YES"}</Text>

            <Text style={styles.label}>처리자</Text>
            <Text style={data.process == 1 ? styles.input : styles.inputReadonly}>{data.name}</Text>

            <Text style={styles.label}>처리 시간</Text>
            <Text style={data.process == 1 ? styles.input : styles.inputReadonly}>{data.processed_time}</Text>

            <Text style={styles.label}>흡연여부</Text>
            {data.process == 1 ?
            <Text style={styles.input}>{data.smoking == 0 ? "NO" : "YES"}</Text>
            :
            <View>
                <RNPickerSelect
                    placeholder={{label : '흡연여부', value : null, color : 'gray'}}
                    onValueChange={(value) => setProcessData({
                            ...processData, smoke : value
                        })
                    }
                    items={[
                        { label: 'YES', value: 1 },
                        { label: 'NO', value: 0 },
                    ]}
                    style={SelectStyles}
                    />
             </View>
            }

            <Text style={styles.label}>의견</Text>
            {data.process == 1 ?
            <Text style={styles.input}>{data.comment}</Text>
            :
            <TextInput 
                style={styles.comment} 
                onChangeText={(text) => {          
                    setProcessData({
                        ...processData, comment : text
                    });
                }}
            />
            }

            {data.process == 0 &&
            <Button title="처리하기" color="#37C56E" style={styles.button} onPress={onClick}></Button>            
            }

            <Text></Text>
            <Text></Text>

            

            

        </ScrollView>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({ 
    container : {
        flex : 1,
        justifyContent: 'center', 
        alignItems: 'center',
        width : Dimensions.get('window').width
    },
    label : {
        width : Dimensions.get('window').width * 0.5,
        paddingLeft : 2,
        color : 'gray',
        marginBottom : 2,
    },
    input : {
        width : Dimensions.get('window').width * 0.5,
        marginBottom : 10,
        paddingTop : 5,
        paddingBottom : 5,
        textAlign : 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#ffffff',
    },
    inputReadonly : {
        width : Dimensions.get('window').width * 0.5,
        marginBottom : 10,
        paddingTop : 5,
        paddingBottom : 5,
        textAlign : 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#eeeeee',
    },
    comment : {
        width : Dimensions.get('window').width * 0.5,
        height : 50,
        marginBottom : 10,
        paddingTop : 5,
        paddingBottom : 5,
        textAlign : 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#ffffff',
    },
    button : {
        marginTop : 100,
    },
    img: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.4,
        borderRadius : 10,
        marginBottom : 10
      },
});


const SelectStyles = StyleSheet.create({
    inputIOS: {
        width : Dimensions.get('window').width * 0.5,
        marginBottom : 10,
        paddingTop : 5,
        paddingBottom : 5,
        textAlign : 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#ffffff',
    },
    inputAndroid: {
        width : Dimensions.get('window').width * 0.5,
        marginBottom : 10,
        paddingTop : 5,
        paddingBottom : 5,
        textAlign : 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#ffffff',
    },
  });