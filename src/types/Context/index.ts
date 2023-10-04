import { Dispatch, ReactNode } from "react";
import { ILocationRes } from "../Global/LocationList";
import { IConfigRes } from "../Layout/Auth";

export interface IStateItem {
  key: string
  data: any
}

export interface IUser {
  email: string
  location: string
  locationArea: string
  typeUser: string
}

export interface IContextState {
  authenticated: boolean
  email: string
  locationUser: string
  locationArea: string
  typeUser: string
  token?: string
  locationList?: ILocationRes[]
  config?: IConfigRes
}

export interface IContextModel {
  state: IContextState;
  dispatch: Dispatch<IContextAction>
}

export type IContextAction =
  | { type: 'LOGIN'; payload: IContextState }
  | { type: 'LOGOUT' }
  | { type: 'ADD'; payload: IStateItem }
  | { type: 'UPDATE'; payload: IStateItem }
  | { type: 'DELETE'; payload: string };



export interface UserProvideProps {
  children: ReactNode
}