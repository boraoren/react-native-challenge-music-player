import React, { useReducer, createContext, Reducer } from 'react';
import { useContext } from 'react';

interface PlayerState {
    isPlaying: boolean;
}

export enum PlayerActionType {
    Play = 'play',
    Pause = 'pause',
}

interface PlayerAction {
    type: PlayerActionType;
}

const initialState: PlayerState = { isPlaying: false };
const PlayerStateContext = createContext<PlayerState>(initialState);
const PlayerDispatchContext = createContext<React.Dispatch<PlayerAction>>(
    () => { },
)


const PlayerReducer = () =>
    useReducer<Reducer<PlayerState, PlayerAction>>((state, action) => {
        switch (action.type) {
            case PlayerActionType.Play:
                return {
                    ...state,
                    isPlaying: true,
                };
            case PlayerActionType.Pause:
                return {
                    ...state,
                    isPlaying: false,
                }
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    }, initialState);

const PlayerProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = PlayerReducer();

    return (
        <PlayerDispatchContext.Provider value={dispatch}>
            <PlayerStateContext.Provider value={state}>
                {children}
            </PlayerStateContext.Provider>
        </PlayerDispatchContext.Provider>
    )
};

const usePlayerStateContext = (): PlayerState => {
    return useContext(PlayerStateContext);
}

const usePlayerDispatchContext = (): React.Dispatch<PlayerAction> => {
    return useContext(PlayerDispatchContext);
}

export { PlayerProvider, 
    usePlayerStateContext,
    usePlayerDispatchContext };