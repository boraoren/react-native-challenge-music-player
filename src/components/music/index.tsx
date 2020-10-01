import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextTitle from '../text/title';
import MusicCard from './card';

const Music = () => {
    return(
        <View style={styles.music}>
            <TextTitle 
                color={'#000'}
                size={16}
                value={'Music'}/>
            <MusicCard />
        </View>
    )
}

const styles = StyleSheet.create({
    music: {
        marginTop: 20,
    }
})

export default Music;