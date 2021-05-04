/*
*   회원관리 Top 네비게이터
*   스크린들을 관리한다람쥐..
*
*/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserMain from './UserMain';
import Register from './Register';
import ListNav from './list/ListNav'

export default function UserTopNav() {

    const Stack = createStackNavigator();


    return( 
        <Stack.Navigator>
            <Stack.Screen name="User" component={UserMain} options={{headerShown: false}} />
            <Stack.Screen name="list" component={ListNav} options={{headerShown: false}}/>
            <Stack.Screen name="register" component={Register}  />
        </Stack.Navigator>
    )

}