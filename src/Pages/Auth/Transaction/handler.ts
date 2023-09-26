import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../Config/Context';
import { ILocationRes } from '../../../types/Checkin';

const useTransactionHandler = () => {
  const { state } = useContext(AppContext);
  const [locationList, setLocationList] = useState<ILocationRes[]>()



  useEffect(() => {
    let locations = state.dataApi.locationList
    setLocationList(locations)
  }, [])

  return { locationList }
}

export default useTransactionHandler