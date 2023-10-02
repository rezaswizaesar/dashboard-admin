import { ReactNode } from "react";

export interface AuthLayoutService {
  getAuth: () => Promise<IAuthRes | IAuthServiceError>
}


export interface AuthLayoutProps {
  sidebar: boolean;
  header: boolean;
  label: ReactNode;
  children: any;
}

export interface IAuthRes {
  authenticated: boolean
  email: string
  typeUser: string
  locationUser: string
  locationArea: string
  token: string
}

export interface IAuthServiceError {
  isSuccess: boolean;
  token: string
}
