import { PartnershipResponse } from '@/types/Partnership';
import { useCallback, useEffect, useState } from 'react';
import createAxiosInstance from '../../../../Service/FetchApi';
import { getPartnership } from '../../../../service/partnership';

const PartnershipHandler = () => {
    const [selectType, setSelectType] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [dataTable, setDataTable] = useState<PartnershipResponse[]>([]);
    // const { serviceApi, apiResponse: responseDataTable } = createAxiosInstance();
    // const onChangeType = useCallback(async (value: string) => {
        // serviceApi({
        //     url: "/partnerships",
        //     method: 'GET',
        //     params: {
        //         type: value
        //     },
        //     token: true
        // });
    //     await getPartnership(value)
    //     setSelectType(value);
    // }, [serviceApi]);

    const onChangeType = async (value: string) =>{
        setIsLoading(true);
        let response= await getPartnership(value)
        console.log(response)
        setIsLoading(false);
        // setDataTable(response)
        // response?.data?.map((item: any, key: number) => {
        //     return {
        //         ...item,
        //         key: key
        //     }
        // })
        setDataTable(response);
        setSelectType(value);
    }

    // useEffect(() => {
    //     if (responseDataTable?.isSuccess) {
    //         let setKey = responseDataTable.data.data.map((item: any, key: number) => {
    //             return {
    //                 ...item,
    //                 key: key
    //             }
    //         })
    //         setDataTable(setKey)
    //     }
    // }, [responseDataTable?.isSuccess])
    return { isLoading, onChangeType, selectType, dataTable }
}

export default PartnershipHandler;