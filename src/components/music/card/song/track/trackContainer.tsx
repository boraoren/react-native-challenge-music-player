import React, { useEffect } from 'react';
import SongTrack from './track';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';
import {
    PlayerActionType,
    usePlayerDispatchContext,
    usePlayerStateContext
} from '../../../../../hooks/player';
import { Button, Text } from 'react-native';


const SongTrackContainer = () => {

    const state = usePlayerStateContext();
    const dispatch = usePlayerDispatchContext();
    const { position, duration } = useTrackPlayerProgress();

    useEffect(() => {
        TrackPlayer.setupPlayer().then(async () => {
            const currentTrack = await TrackPlayer.getCurrentTrack();
            if (currentTrack == null) {
                await addTrack();
            }
        });

        const playTrack = async () => {
            await TrackPlayer.play();
        }

        const pauseTrack = async () => {
            await TrackPlayer.pause();
        }

        state.isPlaying ? playTrack() : pauseTrack();

    }, [state.isPlaying])



    const addTrack = async () => {
        await TrackPlayer.add({
            id: '1',
            url: require('./Sunspots.mp3'),
            title: 'Sunspots',
            artist: 'Jeremy Blake',
        });
    }

    const setTrackTime = async (value: number) => {
        await TrackPlayer.seekTo((duration / 100) * value);
        await dispatch({ type: PlayerActionType.Play });
    }

    return (
        <SongTrack
            position={position}
            duration={duration}
            setTime={setTrackTime} />
    )
}

export default SongTrackContainer;