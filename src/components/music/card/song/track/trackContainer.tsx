import React from 'react';
import SongTrack from './track';


const SongTrackContainer = () => {

    const setTrackTime = () => {

    }

    return(

        <SongTrack
            position={60} 
            duration={180}
            setTime={setTrackTime}/>
    )
}

export default SongTrackContainer;