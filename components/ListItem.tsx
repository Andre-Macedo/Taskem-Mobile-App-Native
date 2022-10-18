import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { itemStyles } from '../styles/styles';
import moment from 'moment';

export const ListItem = (props: any) => {
    const { item } = props;
    const { finishedDate, name, scheduledDate } = item;

    const getDataTexto = (dtFinished: string, dtScheduled: string) => {
        if (dtFinished) {
            return `Finished on: ${moment(dtFinished).format('DD/MM/yyyy')}`
        } else {
            return `Scheduled to: ${moment(dtScheduled).format('DD/MM/yyyy')}`
        }
    };

    const renderContent = () => (
        <>
            <Image
                style={itemStyles.image}
                source={finishedDate ? require('../assets/images/concluido.png')
                    : require('../assets/images/nao-concluido.png')} />
            <View>
                <Text style={[itemStyles.text, (finishedDate ? itemStyles.textFinished : null)]}>{item.name}</Text>
                <Text style={itemStyles.textData}>{getDataTexto(finishedDate, scheduledDate)}</Text>
            </View>
        </>
    )

    return (
        finishedDate ?
            <View style={[itemStyles.container]}>
                {renderContent()}
            </View>
            :
            <TouchableOpacity style={[itemStyles.container, itemStyles.notFinished]}>
                {renderContent()}
            </TouchableOpacity>
    );
}