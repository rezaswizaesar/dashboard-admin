import { ICounterAction, ICounterState, IStateItem } from "../../types/ContextType";


export const login = (data: ICounterState): ICounterAction => ({
  type: "LOGIN",
  payload: data
})

export const logout = () => ({
  type: "LOGOUT",
})

export const setData = (data: IStateItem): ICounterAction => ({
  type: "ADD",
  payload: data
})

export const updateData = (data: IStateItem): ICounterAction => ({
  type: "UPDATE",
  payload: data
})

export const removeData = (id: string): ICounterAction => ({
  type: "DELETE",
  payload: id
});