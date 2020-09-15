import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ButtonMedia = ({isPlaying}:{isPlaying: boolean}) => {
    return(
        <View style={styles(isPlaying).panel}>
            {isPlaying ?(
                <Text style={styles(isPlaying).button}>||</Text>
            ) : (
                <Text style={styles(isPlaying).button}>&#9654;</Text>
            )}
        </View>
    )
}

const styles = (isPlaying?:boolean) => StyleSheet.create({
    panel: {
        width: 59,
        height: 59,
        backgroundColor: isPlaying ? '#000' : '#FFF',
        borderWidth: 1,
        borderColor: isPlaying ? '#000' : '#E9E9E9',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button: {
        color: isPlaying ? '#FFF' : '#000',
        fontSize: 23,
        fontWeight: '900',
    }
})

export default ButtonMedia;