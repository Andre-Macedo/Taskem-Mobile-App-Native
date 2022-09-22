
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, KeyboardType } from "react-native";
import { executeRequest } from "../services/api";
import Navigation from "../navigation";
import { defaultStyles, loginStyles } from "../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginScreen = () => {

    const navigation = useNavigation();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const executeLogin = async () => {
        try {
            setLoading(true);
            setErrorMsg('');

            const body = {
                login,
                password: password
            };

            if (!login || login.length < 5
                || !password || password.length < 5) {
                setErrorMsg("Please use the correct input");
                setLoading(false);
                return;
            }

            const result = await executeRequest('login', 'POST', body);
            if (result?.data?.token) {
                AsyncStorage.setItem('accessToken', result.data.token);
                AsyncStorage.setItem('userEmail', result.data.email);
                AsyncStorage.setItem('userName', result.data.name);
                navigation.navigate('Home');
                return;
            }
            setErrorMsg('Not possible to access database.')
        } catch (e: any) {
            if (e?.response?.data?.error) {
                console.log(e?.response?.data)
                setErrorMsg(e.response.data.error)
            } else {
                setErrorMsg('Not possible to access database.')
            }
        }
        setLoading(false);
    }

    return (
        <View style={defaultStyles.container}>
            <View style={loginStyles.form}>
                <Image source={require("../assets/images/Taskem-Logo.png")} style={loginStyles.logo}></Image>
                {errorMsg
                    ? <Text style={defaultStyles.errorMsg}>{errorMsg}</Text>
                    : null}
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require("../assets/images/mail.png")} style={loginStyles.icon} />

                    <TextInput
                        style={loginStyles.input}
                        placeholder="Type your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={login}
                        onChangeText={setLogin}
                    />
                </View>
                <View style={[defaultStyles.horizontalView, loginStyles.inputView]}>
                    <Image source={require("../assets/images/lock.png")} style={loginStyles.icon}></Image>
                    <TextInput
                        secureTextEntry={true}
                        style={loginStyles.input}
                        placeholder="Password"
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity onPress={executeLogin} style={loginStyles.button}
                    disabled={loading}>
                    {
                        loading ?
                            <ActivityIndicator size="large" color="#ffff" />
                            :
                            <Text style={loginStyles.buttonText}>Login</Text>

                    }

                </TouchableOpacity>
            </View>
        </View>
    );
}