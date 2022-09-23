import React from 'react';
import { View } from 'react-native';
import { defaultStyles } from '../styles/styles';
import { SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { Filters } from '../components/Filters';

export const HomeScreen = () => {


    return (
        <SafeAreaView style={[defaultStyles.container, defaultStyles.containerTop]}>
            <Header />
            <Filters />
        </SafeAreaView>
    );
}