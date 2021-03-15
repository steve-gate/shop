import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import trangchu from './screen/trangchu/trangchu.js'
import nhaphang from './screen/nhaphang/nhaphang.js'
import trangchu2 from './screen/trangchu/trangchu2.js'
import { Tab0 } from './Tab'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab0" component={Tab0} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}

