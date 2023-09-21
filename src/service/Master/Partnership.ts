import { PartnershipService, PartnershipServiceError, TypePartnershipParameter, TypePartnershipResp } from "../../types/Partnership";
import { axiosFetch } from "../AxiosFetch";

export const getPartnership = async ({partnershipType}: TypePartnershipParameter) => {
    try {
        const data = await axiosFetch({
            url: "/partnerships",
            method: 'GET',
            params: {
                type: partnershipType
            },
            token: true
        });
        const newValue : TypePartnershipResp[] = data?.data.data.map((newData: TypePartnershipResp)=>{
            return {
                key: newData.phone,
                personName: newData.personName,
                phone: newData.phone,
                email: newData.email,
                createdDate: newData.createdDate,
                partnershipType: newData.partnershipType,
                ownAsset: newData.ownAsset,
                investmentPlan: newData.investmentPlan,
                employeeNumber: newData.employeeNumber,
                contactTime: newData.contactTime,
                companyName: newData.companyName,
                dialCode: newData.dialCode,
            }as TypePartnershipResp;
        })
        return newValue;
    } catch (error) {
        console.log(error)
        return {
            isSuccess: false
        } as PartnershipServiceError;
    }
}

export function usePartnershipService(): PartnershipService {
    return {
        getPartnership,
    }
}