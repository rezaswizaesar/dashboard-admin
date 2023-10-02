
import { axiosFetch } from "../../helper/Axios/AxiosFetch";
import { GetProfileService, IGetProfileServiceRes, IGetProfileServiceServiceError } from "../../types/Global/GetProfile";

export const getProfile = async () => {
  try {
    const data = await axiosFetch({
      url: "/auth/me",
      method: "GET",
      token: true
    })
   
    const newValue = (data:IGetProfileServiceRes) => {
      return {
        email: data.email,
        typeUser: data.typeUser,
        locationUser: data.locationUser,
        locationArea: data.locationArea
      }
    }
    const updateValue:IGetProfileServiceRes = newValue(data.data.data)
    return updateValue
  } catch (error) {
    console.log(error)
    return {
      isSuccess: false,
    } as IGetProfileServiceServiceError  }
}

export function useGetProfileService(): GetProfileService {
  return {
    getProfile,
  }
}