import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './component/login'
import Container from './component/Container'

function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}
function Feed() {
  return (
    <Text>
      Feed
    </Text>
  )
}
function Messages() {
  return (
    <Text>
      Messagess
    </Text>
  )
}
function Profile() {
  return (
    <Text>
      profile
    </Text>
  )
}

function Settings() {
  return (
    <Text>
      Settings
    </Text>
  )
}

export default function App() {
  const [state, setState] = useState(
    {isLogin : false,}
  );

  const {isLogin} = state;

  const Stack = createStackNavigator();

  return (
    <NavigationContainer style={{backgroundColor : '#ffffff'}}>
    <Stack.Navigator style={{backgroundColor : '#ffffff'}}>
      <Stack.Screen name="login" component={Login} options={{
        headerStyle : {
          
        }
      }}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth : 2,
    borderRadius : 2,
    borderColor : 'gray',
    flex: 4, 
    alignItems: 'center',
    justifyContent: 'center',    
  },
  header : {
    flex : 0.5,
  },
  title : {
    flex : 0.5,
  },
  content : {
    flex : 4,
  },
  footer : {
    flex : 0.5,
  }
 
});
