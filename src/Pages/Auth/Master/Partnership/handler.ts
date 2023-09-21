import { useState } from 'react';
import { usePartnershipService } from '../../../../service/Partnership';
import { PartnershipServiceError, TypePartnershipResp } from '../../../../types/Partnership';

const usePartnershipHandler = () => {
    const [selectType, setSelectType] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [dataTable, setDataTable] = useState<TypePartnershipResp[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState<TypePartnershipResp | null>(null);
    const service = usePartnershipService()

    const onChangeType = async (value: string) =>{
        setIsLoading(true);
        setSelectType(value);
        let response = await service.getPartnership({
            partnershipType: value
        })
        console.log((response as PartnershipServiceError).isSuccess)
        if((response as PartnershipServiceError).isSuccess === undefined) {
            setDataTable(response as TypePartnershipResp[]); 
        }else{
            console.log('kesini', )
            setIsSuccess(false);
        }
        setIsLoading(false);
    }

    const openDetail = (selectedData: TypePartnershipResp) =>{
        setShowModal(true);
        setSelectedData(selectedData);
    };
    
    const closeDetail = () =>{
        setShowModal(false);
        setSelectedData(null);
    };

    return { isLoading, selectType, dataTable, showModal, selectedData, onChangeType, openDetail, closeDetail, isSuccess };
}

export default usePartnershipHandler;

