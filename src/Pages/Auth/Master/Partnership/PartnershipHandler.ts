import React from 'react'
import createAxiosInstance from '../../../../Service/FetchApi';

const PartnershipHandler = ()=>{
  const [selectType, setSelectType] = React.useState<string>("")
  const [dataTable, setDataTable] = React.useState<any>([])
  const { serviceApi, apiResponse: responseDataTable } = createAxiosInstance();
  const onChangeType = React.useCallback((value: string) => {
    serviceApi({
      url: "/partnerships",
      method: 'GET',
      params: {
        type: value
      },
      token: true
    });
    setSelectType(value);
  }, [serviceApi]);
  
  React.useEffect(()=>{
    if(responseDataTable?.data){
      let setKey = responseDataTable.data.data.map((item: any, key: number) =>{
        return {
          ...item,
          key: key
        }
      })
      setDataTable(setKey)
    }
  }, [responseDataTable?.data])
  return {onChangeType, selectType, dataTable}
}
export default PartnershipHandler