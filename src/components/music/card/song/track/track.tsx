import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SoundCloudWaveform from 'react-native-soundcloud-waveform-typescript';
import { timeInMinutesAndSeconds } from '../../../../../utils/timeUtil';

interface SongTrackProps {
    position: number;
    duration: number;
    setTime: Function;
}

const SongTrack: React.FC<SongTrackProps> = (props) => {

    return(
        <View style={styles.track}>
            <Text style={styles.position}>
                {timeInMinutesAndSeconds(props.position)}
            </Text>
            <SoundCloudWaveform
                waveformUrl="https://wave.sndcdn.com/SIcYMy4uYpRA_m.png"
                setTime={props.setTime}
                percentPlayed={props.position / props.duration}
                active={'#454617'}
                activeInverse={'#E7E84E'}
                width={265}
                height={20}
            />
            <Text style={styles.duration}>
                {timeInMinutesAndSeconds(props.duration)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    track: {
        flexDirection: 'row',
        marginTop: 20,
        width: '80%',
    },
    position: {
        color: '#FFF',
        alignSelf: 'flex-end',
        marginBottom: 5,
        marginRight: 5,
    },
    duration: {
        color: '#FFF',
        alignSelf: 'flex-end',
        marginBottom: 5,
    }
})

export default SongTrack;