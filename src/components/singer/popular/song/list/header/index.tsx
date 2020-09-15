import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SingerPopularSongListHeader = () => {
    return(
        <View style={styles.singerPopularSongListHeader}>
            <Text style={styles.title}>Popular</Text>
            <Text style={styles.iconMore}>...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    singerPopularSongListHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Gilroy',
    },
    iconMore:{
        color: '#474C55',
        fontWeight: '900'
    }
})

export default SingerPopularSongListHeader;