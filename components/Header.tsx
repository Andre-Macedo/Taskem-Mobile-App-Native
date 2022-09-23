import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { headerStyles } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {

    const [firstName, setFirstName] = useState("");

    const getName = async () => {
        const userName = await AsyncStorage.getItem("userName");
        if (userName) {
            const first = (userName?.split(" ")[0] || "");
            setFirstName(first)
        }
    }

    useEffect(() => {
        getName()
    }, []);


    const navigation = useNavigation();

    const logOut = async () => {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("userName");
        await AsyncStorage.removeItem("userEmail");
        navigation.navigate("Login");
    }

    return (
        <View style={headerStyles.container}>
            <Image style={headerStyles.logo} source={require("../assets/images/Taskem-Logo.png")} />
            <View style={headerStyles.viewLogOut}>
                <Text style={headerStyles.textName}>{"Hello, " + firstName}</Text>
                <TouchableOpacity onPress={logOut}>
                    <Image style={headerStyles.logOut} source={require("../assets/images/exit.png")} />

                </TouchableOpacity>
            </View>
        </View>
    );
}