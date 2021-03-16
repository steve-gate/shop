import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import nhaphang from './screen/nhaphang/nhaphang.js'
import trangchu2 from './screen/trangchu/trangchu2.js'
import { Tab0 } from './Tab';
import store from './redux/store'

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tab0" component={Tab0}
          //           options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}

