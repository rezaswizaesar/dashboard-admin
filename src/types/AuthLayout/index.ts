import { IStateItem } from "../Context"

export interface AuthLayoutService {
  getAuth: () => Promise<IAuthRes | IAuthServiceError>
}

export interface IAuthRes {
  authenticated: boolean
  email: string
  typeUser: string
  locationUser: string
  locationArea: string
  token: string
  dataApi: IStateItem
}

export interface IAuthServiceError {
  isSuccess: boolean;
  token: string
}