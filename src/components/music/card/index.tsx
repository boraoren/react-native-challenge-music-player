import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerMediaContainer from './player/media';
import PlayerMedia from './player/media/playerMedia';
import Song from './song';

const MusicCard = () => {
    return(
        <View style={styles.musicCard}>
            <Song/>
            <PlayerMediaContainer/>
        </View>
    )
}

const styles = StyleSheet.create({
    musicCard: {
        backgroundColor: '#000',
        height: 550,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginTop: 100,
        alignItems: 'center',
    }
});

export default MusicCard;