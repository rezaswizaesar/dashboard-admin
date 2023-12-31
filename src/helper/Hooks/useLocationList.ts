import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../config/Context";
import { ILocationRes, ILocationServiceError } from "../../types/Global/LocationList";
import { setData } from "../../config/Action";
import { useLocationService } from "../../service/Global/getLocationList";

const useLocationList = () => {
  const service = useLocationService();
  const { state, dispatch } = useContext(AppContext);
  const [locationList, setLocationList] = useState<ILocationRes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocation = async () => {
    setIsLoading(true);
    let response = await service.getLocation();
    if ((response as ILocationServiceError).isSuccess === undefined) {
      setLocationList(response as ILocationRes[]);
      dispatch(setData({
        key: "locationList",
        data: response as ILocationRes[]
      }))
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (state.locationList) {
      let locations = state.locationList;
      setLocationList(locations);
    } else {
      fetchLocation();
    }
  }, [])

  return { locationList, isLoading }
}

export default useLocationList