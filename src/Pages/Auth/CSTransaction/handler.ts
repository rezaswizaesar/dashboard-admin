import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Config/Context";
import useLocationList from "../../../helper/Hooks/useLocationList";
import { ILocationList } from "../../../types/Global/LocationList";


const useCSTransactionHandler = () => {
  const { state } = useContext(AppContext);
  const { isLoading } = useLocationList();
  const [locationUser, setLocationUser] = useState<string>("")
  const [locationList, setLocationList] = useState<ILocationList[]>()

  const handleLocation = (value: string) => {
    console.log(value)
    setLocationUser(value)
  }

  useEffect(() => {
    setLocationUser(state.locationUser)
    setLocationList(state.dataApi.locationList)
  }, [])


  return {
    locationUser, locationList, isLoading, function: { handleLocation }
  }
}

export default useCSTransactionHandler;