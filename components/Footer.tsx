import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { footerStyles } from '../styles/styles';

export const Footer = () => {
    return (
        <View style={[footerStyles.container]}>
            <TouchableOpacity style={footerStyles.button}>
                <Image style={footerStyles.image} source={require('../assets/images/add.png')} />
                <Text style={footerStyles.text}>Add Tasl</Text>
            </TouchableOpacity>
        </View>
    );
}