import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonMedia from '../../../../../../buttons/media';

export interface SingerPopularSongListItemsItemProps {
    id:number;
    title: string;
    isPlaying: boolean;
    totalTime: string;
    remainingTime: string;
    isLiked: boolean;
}

const SingerPopularSongListItemsItem = ({
    item
}:{
    item:SingerPopularSongListItemsItemProps
}) =>{
    return(
        <View style={styles().singerPopularSongListItemsItem}>
            <ButtonMedia isPlaying={item.isPlaying}/>
            <View style={styles().titlePanel}>
                <Text style={styles(item).title}>{item.title}</Text>
            </View>
            <Text style={styles(item).timing}>
                {item.isPlaying ? item.remainingTime : item.totalTime}
            </Text>
            <Text style={styles(item).like}>&hearts;</Text>
        </View>
    )
}

const styles = (item?: SingerPopularSongListItemsItemProps) => StyleSheet.create({

    singerPopularSongListItemsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    titlePanel: {
        flex: 1,
        marginLeft: 30,
        justifyContent: 'center',
    },
    title: {
        color: item?.isPlaying ? '#000' : '#CCCDCF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    timing: {
        alignSelf: 'center',
        color: item?.isPlaying ? '#000' : '#CCCDCF',
    },
    like: {
        alignSelf: 'center',
        color: item?.isLiked ? '#000' : '#CCCDCF',
        fontSize: 30,
        marginLeft: 35,
    }
})

export default SingerPopularSongListItemsItem;