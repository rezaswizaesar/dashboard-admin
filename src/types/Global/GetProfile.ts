export interface GetProfileService {
  getProfile: () => Promise<IGetProfileServiceRes | IGetProfileServiceServiceError>
}

export interface IGetProfileService {
  email: string
  typeUser: string
  locationUser: string
  locationArea: string
}

export interface IGetProfileServiceRes {
  email: string
  typeUser: string
  locationUser: string
  locationArea: string
}

export interface IGetProfileServiceServiceError {
  isSuccess: boolean;
}