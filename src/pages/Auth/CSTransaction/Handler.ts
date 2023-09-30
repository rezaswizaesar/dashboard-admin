import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../config/Context";
import useLocationList from "../../../helper/Hooks/useLocationList";
import { ILocationList } from "../../../types/Global/LocationList";
import { removeData } from "../../../config/Action";


const useCSTransactionHandler = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isLoading } = useLocationList();
  const [locationUser, setLocationUser] = useState<string>("")
  const [locationList, setLocationList] = useState<ILocationList[]>()

  const handleLocation = (value: string) => {
    console.log(value)
    setLocationUser(value)
  }

  const removeLocation = () => {
    dispatch(removeData("locationList"))
  }

  const displayLocation = () => {
    console.log("location List => ", state)
  }

  useEffect(() => {
    setLocationUser(state.locationUser)
    setLocationList(state.locationList)
  }, [])


  return {
    locationUser, locationList, isLoading, function: { handleLocation, removeLocation, displayLocation }
  }
}

export default useCSTransactionHandler;