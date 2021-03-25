import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import plSP from './screen/trangchu/plSP.js'
import trangchu2 from './screen/trangchu/trangchu2.js'
import nhaphang from './screen/nhaphang/nhaphang.js';
import hopthu from './screen/hopthu/hopthu.js'

const Tab = createBottomTabNavigator();

export function Tab0() {
    return (
        <Tab.Navigator
            initialRouteName="trangchu2"
            tabBarOptions={{
                activeTintColor: '#4197EC',
                inactiveTintColor: "gray"
            }}>

            <Tab.Screen
                name="trangchu2"
                component={trangchu2}
                options={{
                    tabBarLabel: 'trang chủ',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? < FontAwesome5 name="home" size={24} color="#4197EC" />
                            : < FontAwesome5 name="home" size={24} color="gray" />
                    ),
                }}
            />

            <Tab.Screen
                name="nhaphang"
                component={nhaphang}
                options={{
                    tabBarLabel: 'nhập hàng',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? < FontAwesome5 name="home" size={24} color="#4197EC" />
                            : < FontAwesome5 name="home" size={24} color="gray" />
                    ),

                }}
            />

            <Tab.Screen
                name="hopthu"
                component={hopthu}
                options={{
                    tabBarLabel: 'hộp thư',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? <AntDesign name="message1" size={24} color="#4197EC" />
                            : <AntDesign name="message1" size={24} color="gray" />
                    ),
                }}
            />
            <Tab.Screen
                name="plSP"
                component={plSP}
                options={{
                    tabBarLabel: 'plSP',
                    tabBarIcon: ({ color, size, focused }) => (
                        focused
                            ? <AntDesign name="message1" size={24} color="#4197EC" />
                            : <AntDesign name="message1" size={24} color="gray" />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}