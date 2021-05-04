/*
*   회원목록 Top 네비게이터
*
*/

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import List from './UserList'
import Manage from './Manage';

export default function UserTopNav() {

    const Stack = createStackNavigator();


    return( 
        <Stack.Navigator>
            <Stack.Screen name="list" component={List} />
            <Stack.Screen name="manage" component={Manage}  />
        </Stack.Navigator>
    )

}