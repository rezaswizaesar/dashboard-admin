import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Config/Context";
import { ILocationList, ILocationRes, ILocationServiceError } from "../../../types/Checkin";
import { useLocationService } from "../../../Service/Checkin";
import { setData } from "../../../Config/Action";


const useCheckinHandler = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [locationList, setLocationList] = useState<ILocationList[]>([])
  const service = useLocationService()

  const fetchLocation = async () => {
    setIsLoading(true)
    let response = await service.getLocation()

    if ((response as ILocationServiceError).isSuccess === undefined) {
      setLocationList(response as ILocationRes[]);
      dispatch(setData({
        key: "locationList",
        data: response as ILocationRes[]
      }))
    } else {
      setIsSuccess(false)
    }
  }

  useEffect(() => {
    fetchLocation()
  }, [])



  return {
    state, isLoading, isSuccess, locationList
  }
}

export default useCheckinHandler;