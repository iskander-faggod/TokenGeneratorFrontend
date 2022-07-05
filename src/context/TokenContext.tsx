import React, {
    createContext,
    useContext,
    useReducer,
} from 'react';

import {
    ITokenState,
} from '../interfaces/token';

type ActionType = 'SET_TOKEN' | 'SET_EMAIL' | 'SET_PASSWORD' ;
type PayloadType = any;

export interface IAction {
    type: ActionType;
    payload?: PayloadType;
}
type DispatchType = (action: IAction) => void;

export const StateTokenContext = createContext<{tokenState: ITokenState;
    tokenDispatch: DispatchType} | undefined>(undefined);

const stateReducer = (state: ITokenState, action: IAction): ITokenState => {
    const {
        token,
        email,
        password
    } = action.payload;

    switch (action.type) {
        case 'SET_TOKEN':
            return setToken(state, token);
        case 'SET_EMAIL':
            return setEmail(state, email);
        case 'SET_PASSWORD':
            return setPassword(state, password);
        default:
            return initialState;
    }
};

const setToken = (state: ITokenState, token: string): ITokenState => {
    return {
        ...state,
        token
    }
};

const setEmail = (state: ITokenState, email: string): ITokenState => {
    return {
        ...state,
        email
    }
};

const setPassword = (state: ITokenState, password: string): ITokenState => {
    return {
        ...state,
        password
    }
};

const initialState: ITokenState = {
    token: '',
    email: '',
    password : ''
};


const StateProvider = ({ children }: { children: React.ReactNode }) => {
    const [tokenState, tokenDispatch] = useReducer(stateReducer, initialState);

    return (
        <StateTokenContext.Provider value={{ tokenState, tokenDispatch }}>
            { children }
        </StateTokenContext.Provider>

    )
}

export const useTokenState = () => {
    const context = useContext(StateTokenContext);

    if (!context) throw new Error('useTokenState must be used in a token state provider');

    return context;
};

export default StateProvider;
