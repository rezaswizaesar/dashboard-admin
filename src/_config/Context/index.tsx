import { createContext, useReducer } from "react";
import { IContextModel, IContextState, UserProvideProps } from "../../_types/Context";
import AppReducer from "../Reducer";

// import AppReducer from "./Reducer";

const defaultState: IContextState = {
  authenticated: false,
  email: "",
  locationUser: "",
  locationArea: "",
  typeUser: "",
  dataApi: []

}

export const AppContext = createContext({} as IContextModel);


export const AppProvider = ({ children }: UserProvideProps) => {
  const [state, dispatch] = useReducer(AppReducer, defaultState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}