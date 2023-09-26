
import { IFormLogin, ILoginRes, ILoginServiceError, LoginService } from "../../types/Login";
import { axiosFetch } from "../AxiosFetch";

export const postLogin = async (values: IFormLogin) => {

  try {
    const response = await axiosFetch({
      url: "/auth/login",
      method: 'POST',
      token: true,
      data: {
        email: values.email,
        password: values.password
      }
    })

    const { data } = response?.data
    const newValue: ILoginRes = {
      authenticated: true,
      email: data.user.email,
      typeUser: data.user.typeUser,
      locationUser: data.user.locationUser,
      locationArea: data.user.locationArea,
      token: data.token
    } as ILoginRes

    return newValue
  } catch (error) {
    console.log(error)
    return {
      isSuccess: false,
    } as ILoginServiceError
  }
}

export function useLoginService(): LoginService {
  return {
    postLogin,
  }
}