import { IContextAction, IContextState } from "../../types/Context";


const AppReducer = (state: IContextState, action: IContextAction): IContextState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        authenticated: true,
        email: action.payload.email,
        locationUser: action.payload.locationUser,
        locationArea: action.payload.locationArea,
        typeUser: action.payload.typeUser,
        token: action.payload.token

      }

    case "LOGOUT":
      return {
        ...state,
        authenticated: false,
        email: "",
        locationUser: "",
        locationArea: "",
        typeUser: "",
        token: ""
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

export default AppReducer