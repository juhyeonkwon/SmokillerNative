/*
*   로그아웃 페이지
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios'



export default function PasswordModify({ navigation }) {


    const [inputs, setInputs] = useState({password : '', password2 : '',});

    const {password, password2} = inputs;

 
    const onChangePw = function(text) {
      setInputs({
        ...inputs, password : text,
      });
    }

    const onChangePw2 = function(text) {
        setInputs({
          ...inputs, password2 : text,
        });
    }


    const onClick= async function () {

        console.log(inputs)

        if( password != password2 ) {
            Alert.alert('알림', '비밀번호가 일치하지 않습니다.')
            return ;
        } 
        
        AsyncStorage.getItem('user_info', (err, result) => {

            const user_info = JSON.parse(result);

            axios.post('http://58.122.247.48:3333/api/modify_pw', { idx : user_info.user_id, password : password}, {withCredentials : true} ).then(response => {
                if(response.data === 1) {
                    Alert.alert('알림', '수정을 완료했습니다.')
                    navigation.goBack();
                } else {
                    Alert.alert('알림', '오류가 발생했습니다.')
                }
    
            })


         })
        

      
        
    };

    return (
        <View style={styles.container}>
  

            <Text style={styles.label}>Password</Text>
            <TextInput
            placeholder="PW"
            style={styles.textInput}
            textContentType='password'
            secureTextEntry={true}
            name="password"
            onChangeText={onChangePw}
            value={password}

            />

            <TextInput
            placeholder="다시한번 입력해주세요"
            style={styles.textInput}
            secureTextEntry={true}
            textContentType='password'
            name="password2"
            onChangeText={onChangePw2}
            value={password2}

            />
  
            <Button color="#37C56E" title="변경하기" onPress={onClick}/>
        </View> 
  
    );
  }

  const styles = StyleSheet.create({
    textInput: {
      width : 200,
      margin : 5,
      padding : 3,
      borderColor : 'gray',
      borderWidth : 1,
      borderRadius : 4,
      backgroundColor : '#ffffff',
    },
    container : {
      flex : 1,
      marginTop : -100,
      backgroundColor : '#ffffff',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    label : {
        width : 200,
        paddingLeft : 2,
        color : 'gray',
        marginBottom : 2,
    },
  });
  