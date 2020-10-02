import React from 'react';
import { PlayerActionType, usePlayerDispatchContext, usePlayerStateContext } from '../../../../../hooks/player';
import PlayerMedia from './playerMedia';

const PlayerMediaContainer = () => {

    const state = usePlayerStateContext();
    const dispath = usePlayerDispatchContext();

    return(
        <PlayerMedia 
            isPlaying={state.isPlaying}
            onPlay={()=> dispath( {type: PlayerActionType.Play})}
            onPause={()=>dispath( {type: PlayerActionType.Pause})}
            />
    )
}

export default PlayerMediaContainer;