import { ILocationRes, ILocationServiceError, LocationService } from "../../types/Checkin"
import { axiosFetch } from "../AxiosFetch"

export const getLocation = async () => {
  try {
    const data = await axiosFetch({
      url: "/locations",
      method: "GET",
      token: true
    })

    const newValue: ILocationRes[] = data?.data.data.map((newData: ILocationRes, key: number) => {
      return {
        key: key,
        id: newData.id,
        name: newData.name
      } as ILocationRes
    })
    return newValue
  } catch (error) {
    console.log(error)
    return {
      isSuccess: false,
    } as ILocationServiceError
  }
}

export function useLocationService(): LocationService {
  return {
    getLocation,
  }
}