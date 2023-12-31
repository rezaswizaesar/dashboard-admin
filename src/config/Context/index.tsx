import { createContext, useReducer } from 'react';
import {
    IContextModel,
    IContextState,
    UserProvideProps
} from '../../types/Context';
import AppReducer from '../Reducer';

const defaultState: IContextState = {
    authenticated: false,
    email: '',
    locationUser: '',
    locationArea: '',
    typeUser: ''
};

export const AppContext = createContext({} as IContextModel);

export const AppProvider = ({ children }: UserProvideProps) => {
    const [state, dispatch] = useReducer(AppReducer, defaultState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
