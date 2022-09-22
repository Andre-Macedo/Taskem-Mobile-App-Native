import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { defaultStyles, loginStyles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

    const navigation = useNavigation();

    const logOut = async () => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("userName");
        await AsyncStorage.removeItem("userEmail");
        navigation.navigate("Login");
    }

    return (
        <View style={defaultStyles.container}>
            <TouchableOpacity onPress={logOut} style={loginStyles.button}>
                <Text style={loginStyles.buttonText}>LogOut</Text>
            </TouchableOpacity>
        </View>
    );
}