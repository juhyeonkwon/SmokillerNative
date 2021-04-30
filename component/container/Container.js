import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Photo from './photo/Photo';
import { useEffect } from 'react';
import Home from './home/Home';



  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator(); 
  const Stack = createStackNavigator(); 
  
export default function Container() {
  useEffect(() => {
    
    
    
  
  })
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Tab.Screen name="photo" component={Photo} options={{headerShown: false}}/>
          <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    )


    /*
    const styles = StyleSheet.create({ 
        
        
    )}


*/
};
