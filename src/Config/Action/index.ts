import { IContextAction, IContextState, IStateItem } from "../../types/Context";



export const login = (data: IContextState): IContextAction => ({
  type: "LOGIN",
  payload: data
})

export const logout = (): IContextAction => ({
  type: "LOGOUT"
});

export const setData = (data: IStateItem): IContextAction => ({
  type: "ADD",
  payload: data
})

export const updateData = (data: IStateItem): IContextAction => ({
  type: "UPDATE",
  payload: data
})

export const removeData = (id: string): IContextAction => ({
  type: "DELETE",
  payload: id
});