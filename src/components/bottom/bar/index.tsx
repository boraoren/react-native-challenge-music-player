import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const BottomBar = () => {

    const playListIcon = require('./images/playlist.png');
    const scoreIcon = require('./images/score.png');
    const settingsIcon = require('./images/settings.png');

    return(
        <View style={styles.bottomBar}>
            <Image source={settingsIcon}/>
            <Image source={scoreIcon}/>
            <Image source={playListIcon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45,
        marginLeft: 25,
        marginRight: 25,
    }
})

export default BottomBar;