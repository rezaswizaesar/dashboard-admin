import { ReactNode } from "react";

export interface AuthLayoutService {
  getAuth: () => Promise<IAuthRes | IAuthServiceError>
  getConfig: () => Promise<IConfigRes | IConfigServiceError>
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

export interface IConfigRes {
  GENERATE_SOURCEMAP: boolean,
  REACT_APP_API_ENDPOINT: string,
  REACT_APP_API_ENDPOINT_V2: string,
  REACT_APP_AUTHORIZATION_GOOGLE_ANALYTIC: string,
  REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID: string,
  REACT_APP_AWS_COGNITO_REGION: string,
  REACT_APP_AWS_PROJECT_REGION: string,
  REACT_APP_AWS_S3_BUCKET_PHOTO: string,
  REACT_APP_AWS_S3_BUCKET_PHOTO_URL: string,
  REACT_APP_AWS_S3_KEYACCESS_FHAD: string,
  REACT_APP_AWS_S3_KEYID_FHAD: string,
  REACT_APP_AWS_USER_POOLS_ID: string,
  REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID: string,
  REACT_APP_BRAZE_API_KEY: string,
  REACT_APP_BRAZE_APP_ID: string,
  REACT_APP_BRAZE_ENDPOINT: string,
  REACT_APP_ENV: string,
  REACT_APP_FHAD_DOMAIN: string,
  REACT_APP_FIREBASE_API_KEY: string,
  REACT_APP_FIREBASE_APP_ID: string,
  REACT_APP_FIREBASE_AUTH_DOMAIN: string,
  REACT_APP_FIREBASE_MEASUREMENT_ID: string,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string,
  REACT_APP_FIREBASE_PROJECT_ID: string,
  REACT_APP_FIREBASE_STORAGE_BUCKET: string,
  REACT_APP_FIREBASE_USERS_EMAIL: string,
  REACT_APP_FIREBASE_USERS_PASSWORD: string,
  REACT_APP_GOOGLE_ANALYTIC: string,
  SKIP_PREFLIGHT_CHECK: boolean
}

export interface IConfigServiceError {
  isSuccess: boolean;
}