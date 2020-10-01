import React from 'react';
import { Image, StyleSheet } from 'react-native';

const artistImage = require('./jeremyBlake.jpeg');

const SongArtistImage = () => {
    return <Image 
        style={styles.image}
        source={artistImage}/>
}

const styles = StyleSheet.create({
    image: {
        width: 202,
        height: 270,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: -80,
    }
})

export default SongArtistImage;