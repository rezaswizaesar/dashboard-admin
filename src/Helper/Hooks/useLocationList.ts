import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Config/Context";
import { useLocationService } from "../../Service/Global/GetLocationList";
import { ILocationRes, ILocationServiceError } from "../../types/Checkin";
import { setData } from "../../Config/Action";

// const useLocationList = () => {
// const service = useLocationService();
// const { state, dispatch } = useContext(AppContext);
// const [locationList, setLocationList] = useState<ILocationRes[]>();
// const [isLoading, setIsLoading] = useState(false);
// const [isSuccess, setIsSuccess] = useState(true);

//   console.log("useLocationList")

//   const fetchLocation = async () => {
//     console.log("fetchLocation")
//     setIsLoading(true);
//     let response = await service.getLocation();
//     if ((response as ILocationServiceError).isSuccess === undefined) {
//       setLocationList(response as ILocationRes[]);
//       dispatch(setData({
//         key: "locationList",
//         data: response as ILocationRes[]
//       }))
//       setIsLoading(false);
//     } else {
//       setIsLoading(false);
//       setIsSuccess(false);
//     }
//   }


//   if (state.dataApi.locationList) {
//     let locations = state.dataApi.locationList;
//     setLocationList(locations);
//   } else {
//     fetchLocation();
//   }


//   return { isLoading, isSuccess, locationList };

// }

// export default useLocationList



function useLocationList() {
  const service = useLocationService();
  const { state, dispatch } = useContext(AppContext);
  const [locationList, setLocationList] = useState<ILocationRes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocation = async () => {
    console.log("fetchLocation")
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
      console.log("if")
      let locations = state.dataApi.locationList;
      setLocationList(locations);
    } else {
      fetchLocation();
    }
  }, [])

  return [locationList, isLoading];
}

export default useLocationList