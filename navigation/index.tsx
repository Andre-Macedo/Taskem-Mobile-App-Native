/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { RootStackParamList } from '../types';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Navigation(props: any) {
  return (
    <NavigationContainer>
      <RootNavigator accessToken={props.accessToken} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();



function RootNavigator(props: any) {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={props.accessToken !== "" && props.accessToken !== null ? "Home" : "Login"}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
