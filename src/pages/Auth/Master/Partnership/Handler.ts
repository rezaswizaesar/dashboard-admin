import { useState } from 'react';
import { usePartnershipService } from '../../../../Service/Master/Partnership';
import { PartnershipServiceError, TypePartnershipResp } from '../../../../types/Partnership';

const usePartnershipHandler = () => {
    const partnerTypeOption = [
        {
            label: 'Ownership',
            value: 'OWNERSHIP'
        },
        {
            label: 'Corporate Membership',
            value: 'CORPORATE MEMBERSHIP'
        },
        {
            label: 'Collaboration',
            value: 'COLLABORATION'
        }
    ];
    const [partnerType, setpartnerType] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [dataTable, setDataTable] = useState<TypePartnershipResp[]>([]);
    const [selectedData, setSelectedData] = useState<TypePartnershipResp | null>(null);
    const service = usePartnershipService();

    const onChangeType = async (value: string) =>{
        setIsLoading(true);
        setpartnerType(value);
        let response = await service.getPartnership({
            partnershipType: value
        })
        if((response as PartnershipServiceError).isSuccess === undefined) {
            
            setDataTable(response as TypePartnershipResp[]); 
        }else{
            setIsSuccess(false);
        }
        setIsLoading(false);
    }

    const openDetail = (selectedData: TypePartnershipResp) =>{
        setIsShowModal(true);
        setSelectedData(selectedData);
    };
    
    const closeDetail = () =>{
        setIsShowModal(false);
        setSelectedData(null);
    };

    return { partnerType, partnerTypeOption, onChangeType, isLoading, dataTable, isShowModal, selectedData, openDetail, closeDetail, isSuccess };
}

export default usePartnershipHandler;

