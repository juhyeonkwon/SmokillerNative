import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default function Login( { setState }) {

    const onClick= () => {
      setState({
        isLogin : true,
      })
    }
    return (
        <View style={styles.container}>
        <Image source={
          require('../public/smokiller.png')} style={{ width : 200, height : 51}} />
          <TextInput
            placeholder="ID"
            style={styles.textInput}
            />
  
            <TextInput
            placeholder="PW"
            style={styles.textInput}

            />
  
            <Button color="#37C56E" title="Login" onPress={onClick}/>
        </View> 
  
    );
  }

  const styles = StyleSheet.create({
    textInput: {
      width : 200,
      height : '15%',
      margin : 3,
      padding : 3,
      borderColor : 'gray',
      borderWidth : 1,
      borderRadius : 4,
      backgroundColor : '#ffffff',
    },
    container : {
      marginTop : 100,
      backgroundColor : '#ffffff',
    }
  });
  