import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import SingerPopularSongList from './popular/song/list';

const singerImage = require('./singerImage.png')

const Singer = () => {
    return (
        <View style={styles.singer}>
            <ImageBackground 
                source={singerImage}
                style={styles.singerImageBackground}
                borderBottomRightRadius={50}>
                <Text style={styles.name}>NLE Choppa</Text>
            </ImageBackground>
            <SingerPopularSongList/>
        </View>
    )
}

const styles = StyleSheet.create({
    singer: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        marginTop: 54,
        fontWeight: 'bold',
        fontFamily: 'Gilroy',
        textAlign: 'center',
    },
    singerImageBackground: {
        width: '100%',
        height: 500,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    }
})

export default Singer;