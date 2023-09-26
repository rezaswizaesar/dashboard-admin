import { IStateItem } from "../Context"

export interface LoginService {
  postLogin: (values: IFormLogin) => Promise<ILoginRes | ILoginServiceError>
}

export interface ILoginRes {
  authenticated: boolean
  email: string
  typeUser: string
  locationUser: string
  locationArea: string
  token: string
  dataApi: IStateItem[]
}

export interface ILoginServiceError {
  isSuccess: boolean;
  token: string
}

export interface IFormLogin {
  password: string,
  email: string
}
