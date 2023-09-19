// import Axios from "./Axios";
// import { ApiError } from "../types/AxiosType";
// import { PartnershipResponse } from "../types/Partnership";
import { PartnershipResponse } from "@/types/Partnership";
import { axiosFetch } from "./AxiosFetch";

export const getPartnership = async (partnershipType: string)=> {
    try {
        const data = await axiosFetch({
            url: "/partnerships",
            method: 'GET',
            params: {
                type: partnershipType
            },
            token: true
        });
        return data?.data?.data ;
    } catch (error: any) {
        // return {
        //     message: error?.message,
        //     status: error?.response.status
        // }
    }
}