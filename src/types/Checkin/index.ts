export interface LocationService {
  getLocation: () => Promise<ILocationRes[] | ILocationServiceError>
}

export interface ILocationList {
  id: number
  name: string
}

export interface ILocationRes {
  id: number
  name: string
}

export interface ILocationServiceError {
  isSuccess: boolean;
}