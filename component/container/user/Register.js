/*
*   회원등록 컴포넌트(스크린)
*
*/

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios'

export default function Register({navigation}) {


    const [inputs, setInputs] = useState({id : '', password : '', password2 : '', access : '', name : ''});

    const {id, password, password2, access, name} = inputs;

    const onChangeId = function(text) {   
      setInputs({
        ...inputs, id : text,
      });
      
    };

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

    const onChangeName = function(text) {   
        setInputs({
          ...inputs, name : text,
        });
        
      };
      


    const onClick= async function () {

        console.log(inputs)

        if( password != password2 ) {
            Alert.alert('알림', '비밀번호가 일치하지 않습니다.')
            return ;
        } 
        
        axios.post('http://58.122.247.48:3333/api/signup', {id : id, name : name, password : password, rank : access}, {withCredentials : true}).then(response => {
            console.log(response.data);
            if(response.data === 1) {
                Alert.alert('알림', '관리자 등록이 완료되었습니다.')
                navigation.goBack();
            } else {
                Alert.alert('알림', '에러가 발생했습니다.')
            }
        })
        
    };

    return (
        <View style={styles.container}>
        
          <Text style={styles.label}>ID</Text>
          <TextInput
            placeholder="ID"
            style={styles.textInput}
            name="id"
            onChangeText={onChangeId}
            value={id}
            
            />

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

            <Text style={styles.label}>Name</Text>
            <TextInput
            placeholder="이름"
            style={styles.textInput}
            name="name"
            onChangeText={onChangeName}
            value={name}
            
            />

            <Text style={styles.label}>권한</Text>
            <View>
                <RNPickerSelect
                        placeholder={{label : '권한', value : null, color : 'gray'}}
                        onValueChange={(value) => setInputs({...inputs, access : value})}
                        items={[
                            { label: '최고관리자', value: 3 },
                            { label: '관리자', value: 2 },
                            { label: '사원', value: 1 },
                        ]}
                        style={SelectStyles}
                />
            </View>
  
            <Button color="#37C56E" title="관리자 생성" onPress={onClick}/>
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
  
  const SelectStyles = StyleSheet.create({
    inputIOS: {
        width : 200,        
        margin : 5,
        padding : 3,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#ffffff',
    },
    inputAndroid: {
        width : 200,       
        margin : 5,
        padding : 3,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        backgroundColor : '#ffffff',
    },
  });