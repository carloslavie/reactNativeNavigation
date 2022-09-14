import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

//Definir que información tendre aqui
export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado Inicial

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteAction: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);


//Componente proveedor del estado
export const AuthProvider = ({children}: any)=>{
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type:'signIn'});
    };
    const logOut = () => {
        dispatch({type:'logOut'});
    };

    const changeFavoriteAction = (iconName:string) => {
        dispatch({type:'changeFavIcon', payload:iconName});
    };
    const changeUserName = (userName:string) => {
        dispatch({type:'changeUserName', payload:userName});
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                logOut,
                changeFavoriteAction,
                changeUserName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
