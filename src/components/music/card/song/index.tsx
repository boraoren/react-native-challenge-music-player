import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextTitle from '../../../text/title';
import SongArtistImage from './artist/image';
import SongTrackContainer from './track';

const Song = () => {
    return (
        <View>
            <SongArtistImage />
            <View style={styles.song}>
                <TextTitle 
                    color={'#FFF'} 
                    value={'Jeremy Blake'}
                    size={24}/>
                <TextTitle 
                    color={'#5F635D'} 
                    value={'Sunspots'}
                    size={16}/>
            </View>

            <SongTrackContainer/>

        </View>
    )
}

const styles = StyleSheet.create({
    song: {
        marginTop: 20,
    }
})

export default Song;