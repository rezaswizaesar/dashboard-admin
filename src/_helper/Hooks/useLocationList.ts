import { useContext, useEffect, useState } from "react";
import { useLocationService } from "../../_service/Global/getLocationList";
import { AppContext } from "../../_config/Context";
import { ILocationRes, ILocationServiceError } from "../../_types/Global/LocationList";
import { setData } from "../../_config/Action";

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
    if (state.dataApi.locationList) {
      let locations = state.dataApi.locationList;
      setLocationList(locations);
    } else {
      fetchLocation();
    }
  }, [])

  return { locationList, isLoading }
}

export default useLocationList