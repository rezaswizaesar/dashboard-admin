import { AuthLayoutService, IAuthRes, IAuthServiceError } from "../../types/AuthLayout"
import { axiosFetch } from "../AxiosFetch"

export const getAuth = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axiosFetch({
      url: '/auth/me',
      method: 'GET',
      token: true
    })

    const { data } = response?.data
    const newValue: IAuthRes = {
      authenticated: true,
      email: data.email,
      typeUser: data.typeUser,
      locationUser: data.locationUser,
      locationArea: data.locationArea,
      token: token
    } as IAuthRes

    return newValue
  } catch (error) {
    // console.log(error)
    return {
      isSuccess: false,
    } as IAuthServiceError
  }
}

export function useAuthLayoutService(): AuthLayoutService {
  return {
    getAuth,
  }
}