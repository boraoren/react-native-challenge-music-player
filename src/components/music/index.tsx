import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlayerProvider } from '../../hooks/player';
import TextTitle from '../text/title';
import MusicCard from './card';

const Music = () => {
    return (
        <View style={styles.music}>
            <PlayerProvider>
                <TextTitle
                    color={'#000'}
                    size={16}
                    value={'Music'} />
                <MusicCard />
            </PlayerProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    music: {
        marginTop: 20,
    }
})

export default Music;