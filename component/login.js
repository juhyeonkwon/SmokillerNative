import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';
import { onChange } from 'react-native-reanimated';


export default function Login( { navigation, routes}) {


  const [inputs, setInputs] = useState({id : '', password : ''});

  const {id, password} = inputs;

  const onChangeId = function(text) {
    console.log(text)
    
    setInputs({
      ...inputs, id : text,
    });
    
  };

  const onChangePw = function(text) {
    console.log(text)

    setInputs({
      ...inputs, password : text,
    });
  }


    const onClick= async function () {
      await axios.post('http://192.168.0.8:3333/api/login', {id : 'abc', password : 'def'}, {withCredentials : true}).then(response => {
        console.log(response.data.name);

        navigation.navigate({ name : 'container'})

      }).catch(err => {
        console.log(err);
      });
      

    };

    return (
        <View style={styles.container}>
        <Image source={
          require('../public/smokiller.png')} style={{ width : 200, height : 51}} />
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
  