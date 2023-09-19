import { Dispatch, ReactNode, createContext, useReducer } from "react";

export interface IStateItem {
  key: string;
  data: any[]
}

export interface IUser {
  email: string
  location: string
  locationArea: string
  typeUser: string
}

export interface ICounterState {
  authenticated: boolean
  email: string
  locationUser: string
  locationArea: string
  typeUser: string
  dataApi: IStateItem[]
}

export interface IContextModel {
  state: ICounterState;
  dispatch: Dispatch<ICounterAction>
}

export type ICounterAction =
  | { type: 'LOGIN'; payload: ICounterState }
  | { type: 'LOGOUT'; payload: boolean }
  | { type: 'ADD'; payload: IStateItem }
  | { type: 'UPDATE'; payload: IStateItem }
  | { type: 'DELETE'; payload: string };


const defaultState: ICounterState = {
  authenticated: false,
  email: "",
  locationUser: "",
  locationArea: "",
  typeUser: "",
  dataApi: []

}

const AppReducer = (state: ICounterState, action: ICounterAction): ICounterState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        email: action.payload.email,
        locationUser: action.payload.locationUser,
        locationArea: action.payload.locationArea,
        typeUser: action.payload.typeUser,

      }

    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        email: "",
        locationUser: "",
        locationArea: "",
        typeUser: "",
      }

    case "ADD":
      return {
        ...state,
        dataApi: {
          ...state.dataApi,
          [action.payload.key]: action.payload.data
        }
      };

    case "UPDATE":
      return {
        ...state,
        dataApi: {
          ...state.dataApi,
          [action.payload.key]: action.payload.data
        }
      };

    case "DELETE":
      const newState: any = { ...state.dataApi };
      delete newState[action.payload];
      return {
        ...state,
        dataApi: newState
      }


    default:
      return state;
  }
}

export const AppContext = createContext({} as IContextModel);

interface UserProvideProps {
  children: ReactNode
}

export const AppProvider = ({ children }: UserProvideProps) => {
  const [state, dispatch] = useReducer(AppReducer, defaultState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}