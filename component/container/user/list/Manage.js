/*
*   회원관리 컴포넌트(스크린)
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
export default function Manage({ navigation, route }) {

    
    
    useEffect(() => {

    }, [])


    const [access, setAccess] = useState();

    const onClick = () => {
        console.log(access)
       
        axios.post('http://192.168.0.8:3333/api/userlist/modify', {idx : route.params.data[0], access : access}, {withCredentials : true}).then(response => {
            
            if(response.data === 1) {
                Alert.alert('알림', '수정을 완료했습니다. 새로고침을 해주세요.')
                navigation.goBack();
            } else {
                Alert.alert('알림', '오류가 발생했습니다.')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const onClickDelete = () => {

        Alert.alert(
            '알림',
            '삭제하겠습니까?',
            [
                {
                    text: "NO",
                    style : "cancel"
                },
                {
                    text: "YES",
                    onPress : () => {deleteRequset()},                    
                }
            ], {cancelable : false});      
    }

    const deleteRequset = () => {

        axios.post('http://192.168.0.8:3333/api/userlist/delete', {idx : route.params.data[0]}, {withCredentials : true}).then(response => {
            if(response.data === 1) {

                Alert.alert('알림','삭제를 완료했습니다.')
                navigation.goBack();

            } else {
                Alert.alert('알림','오류가 발생했습니다.')
            }            
        });

    }


    return (
        <View style={styles.container}>
            <Text>회원 관리 페이지</Text>

            <Text style={styles.label}>No</Text>
            <Text style={styles.inputReadonly} >{route.params.data[0]}</Text>

            <Text style={styles.label}>ID</Text>
            <Text style={styles.inputReadonly} >{route.params.data[1]}</Text>

            <Text style={styles.label}>Name</Text>
            <Text style={styles.inputReadonly} >{route.params.data[2]}</Text>

            <Text style={styles.label}>권한</Text>
            <View>
                <RNPickerSelect
                        placeholder={{label : '권한수정', value : null, color : 'gray'}}
                        onValueChange={(value) => setAccess(value)}
                        items={[
                            { label: '최고관리자', value: 3 },
                            { label: '관리자', value: 2 },
                            { label: '사원', value: 1 },
                        ]}
                        style={SelectStyles}
                />
            </View>

            <Button title="수정하기" color="#37C56E" style={styles.button} onPress={onClick}></Button>

            <Button title="삭제하기" color="red" style={styles.button} onPress={onClickDelete}></Button>


        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
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