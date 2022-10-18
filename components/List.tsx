import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { listStyles } from '../styles/styles';
import { ListItem } from './ListItem';

export const List = (props: any) => {
    const { list } = props;

    const renderItem = (obj: any) => {
        const { item } = obj;
        return <ListItem item={item} />
    }

    return (
        <View style={[listStyles.container, (list === null || list.length === 0 ? listStyles.empty : null)]}>

            {list === null || list.length === 0 ?
                <>
                    <Image style={listStyles.image} source={require('../assets/images/not-found.png')} />
                    <Text style={listStyles.text}>No tasks scheduled!</Text>
                </>
                :
                <FlatList
                    data={list}
                    keyExtractor={item => item._id}
                    renderItem={renderItem}
                />
            }
        </View>
    );
}