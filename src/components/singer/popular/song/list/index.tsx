import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingerPopularSongListHeader from './header';

const SingerPopularSongList = () => {
    return(
        <View style={styles.singerPopularSongList}>
            <SingerPopularSongListHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    singerPopularSongList: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 32,
    }
})

export default SingerPopularSongList;