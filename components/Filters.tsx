import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { headerStyles } from '../styles/styles';

export const Filters = () => {

    const [showFilters, setShowFilters] = useState(false);

    return (
        <View style={headerStyles.container}>
            <View>
                <Text style={headerStyles.textName}>Tasks</Text>
                <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
                    <Image source={require('../assets/images/filter.png')} />
                </TouchableOpacity>
            </View>
            {showFilters === true && (
                <View >
                    <View>
                        <Text>Period start:</Text>
                        <TextInput />
                    </View>
                    <View>
                        <Text>Period end:</Text>
                        <TextInput />
                    </View>
                    <View>
                        <Text>Status:</Text>
                        <TextInput>
                            {/* <option value={0}>Todas</option>
                                <option value={1}>Ativas</option>
                                <option value={2}>Concluídas</option> */}
                        </TextInput>
                    </View>
                </View>
            )}
        </View>
    );
}