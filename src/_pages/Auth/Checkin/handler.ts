import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../_config/Context";
import useLocationList from "../../../_helper/Hooks/useLocationList";


const useCheckinHandler = () => {
  const { state } = useContext(AppContext);
  const { locationList, isLoading } = useLocationList();
  const [locationUser, setLocationUser] = useState<string>("")

  const handleLocation = (value: string) => {
    console.log(value)
    setLocationUser(value)
  }

  useEffect(() => {
    setLocationUser(state.locationUser)
  }, [])


  return {
    locationUser, locationList, isLoading, function: { handleLocation }
  }
}

export default useCheckinHandler;