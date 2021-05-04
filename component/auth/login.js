import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';

import AsyncStorage from '../../node_modules/@react-native-async-storage/async-storage';


export default function Login( { navigation, routes}) {


    const [inputs, setInputs] = useState({id : '', password : ''});

    const {id, password} = inputs;

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


    const onClick= async function () {
      await axios.post('http://192.168.0.8:3333/api/login', {id : id, password : password}, {withCredentials : true}).then(response => {

        //로그인을 하게되면 AsyncStorage에 로그인 정보를 저장하게 된다. 받아올 값은 user_id와 name 값
        const setData = async(data) => {
          try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem('user_info', jsonValue);
            console.log(data);
          } catch(e) {
            console.log(e);
          }
        }

        setData(response.data).then( () => {
          navigation.navigate({ name : 'container'})
        });

      
        //AsyncStorage에 로그인 정보를 저장하고 난후 Container 컴포넌트로 navigating 한다.

      }).catch(err => {
        console.log(err);
      });
      

    };

    return (
        <View style={styles.container}>
        <Image source={
          require('../../public/smokiller.png')} style={{ width : 200, height : 51}} />
          <TextInput
            placeholder="ID"
            style={styles.textInput}
            name="id"
            onChangeText={onChangeId}
            value={id}
            
            />
  
            <TextInput
            placeholder="PW"
            style={styles.textInput}
            secureTextEntry={true}
            textContentType='password'
            name="password"
            onChangeText={onChangePw}
            value={password}

            />
  
            <Button color="#37C56E" title="Login" onPress={onClick}/>
        </View> 
  
    );
  }

  const styles = StyleSheet.create({
    textInput: {
      width : 200,
      margin : 3,
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
    }
  });
  