
import { notification } from "antd";
import { IFormLogin, ILoginRes, ILoginServiceError, LoginService } from "../../types/Login";
import { axiosFetch } from "../AxiosFetch";

export const postLogin = async (values: IFormLogin) => {

  try {
    const response = await axiosFetch({
      url: "/auth/login",
      method: 'POST',
      token: true,
      data: values
    })

    const { data, meta } = response?.data
    const newValue: ILoginRes = {
      authenticated: true,
      email: data.user.email,
      typeUser: data.user.typeUser,
      locationUser: data.user.locationUser,
      locationArea: data.user.locationArea,
      token: data.token
    } as ILoginRes

    notification.success({
      message: meta.message,
      description: "Logged in successfully, Redirecting you in a few!",
      placement: "topRight",
      duration: 1.5
    });
    return newValue
  } catch (error: any) {
    console.log(error.response.data.meta.message)
    notification.error({
      message: error.response.data.meta.message,
      placement: "topRight",
      duration: 1.5
    });
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