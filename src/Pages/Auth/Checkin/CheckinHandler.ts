import { useCallback, useContext, useEffect, useState } from 'react'
import createAxiosInstance from '../../../Service/FetchApi';
import { AppContext } from '../../../Store/Context/Context';
import { setData } from '../../../Store/Context/Action';



const CheckinHandler = () => {
  const { serviceApi, apiResponse: responseLocation } = createAxiosInstance();
  const { dispatch } = useContext(AppContext);
  const loadLocation = useCallback(() => {
    serviceApi({
      url: "/locations",
      method: 'GET',
      token: true
    });
  }, [serviceApi]);

  useEffect(() => {
    if (responseLocation?.isSuccess) {
      const { data } = responseLocation.data

      dispatch(setData({
        key: "locationListCtx",
        data: data
      }))
    }
  }, [responseLocation?.isSuccess])

  return { loadLocation }
}

export default CheckinHandler