import { Dispatch, ReactNode } from "react";

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



export interface UserProvideProps {
  children: ReactNode
}