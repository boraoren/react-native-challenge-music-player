import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SingerPopularSongListItemsItem, { SingerPopularSongListItemsItemProps } from './item';

const SingerPopularSongListItems = () => {

    const songItems = [
        {
            id:1,
            title: 'Camelot',
            isPlaying: true,
            totalTime: '3:00',
            remainingTime: '00:28',
            isLiked: false,
        },
        {
            id: 2,
            title: 'Shotta Flow',
            isPlaying: false,
            totalTime: '02:40',
            remainingTime: '0',
            isLiked: true,
        },
        {
            id: 3,
            title: 'Sunrise',
            isPlaying: false,
            totalTime: '3:20',
            remainingTime: '0',
            isLiked: false,
        }
    ] as SingerPopularSongListItemsItemProps[];

    return(
        <View style={styles.singerPopularListItems}>
            <FlatList
                data= {songItems}
                renderItem={SingerPopularSongListItemsItem}
                keyExtractor={(item)=> item.id.toString()}
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    singerPopularListItems: {
        flex: 1,
        marginTop: 32,
    }
})

export default SingerPopularSongListItems;