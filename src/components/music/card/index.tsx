import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Song from './song';

const MusicCard = () => {
    return(
        <View style={styles.musicCard}>
            <Song/>
        </View>
    )
}

const styles = StyleSheet.create({
    musicCard: {
        backgroundColor: '#000',
        height: 510,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginTop: 100,
    }
});

export default MusicCard;