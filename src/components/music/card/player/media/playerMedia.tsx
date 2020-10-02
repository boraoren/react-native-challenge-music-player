import React from 'react';
import { GestureResponderEvent, Image, StyleSheet, Text, View } from 'react-native';

interface PlayerMediaProps {
    isPlaying: boolean;
    onPlay: (event: GestureResponderEvent) => void;
    onPause: (event: GestureResponderEvent) => void;
}

const PlayerMedia: React.FC<PlayerMediaProps> = (props) => {

    const { isPlaying } = props;
    const fastForward = require('./images/fast-forward.png');
    const fastBackward = require('./images/fast-backward.png');
    const shuffle = require('./images/shuffle.png');
    const repeat = require('./images/repeat.png');

    return (
        <View style={styles().playerMedia}>
            <Image style={styles().shuffle} source={shuffle}/>
            <Image style={styles().fastBackward} source={fastBackward}/>
            <View style={styles(isPlaying).play}
                onTouchStart={isPlaying? 
                    props.onPause : props.onPlay}>
                
                {props.isPlaying? 
                    (<Text style={styles().button}>||</Text>) 
                    : (<Text style={styles().button}>&#9654;</Text>)
                }
            </View>
            <Image style={styles().fastForward} source={fastForward}/>
            <Image style={styles().repeat} source={repeat}/>

        </View>
    )
}

const styles = (isPlaying?: boolean) => StyleSheet.create({
    playerMedia: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    play: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 95,
        height: 95,
        backgroundColor: isPlaying ? '#E9E9E9' : '#DDE042',
        borderRadius: 50,
    },
    button: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
    },
    shuffle:{
        marginRight: 22,
    },
    fastBackward:{
        marginRight: 14,
    },
    fastForward:{
        marginLeft: 14,
    },
    repeat:{
        marginLeft: 22,
    }
})

export default PlayerMedia;