export interface PartnershipService {
    getPartnership: (r: TypePartnershipParameter) => Promise<TypePartnershipResp[] | PartnershipServiceError>
}

export interface PartnershipServiceError {
    isSuccess: boolean;
}

export interface TypePartnershipParameter {
    partnershipType: string
}
export interface TypePartnershipTable {
    key: string;
    personName: string;
    phone: string;
    email: string;
    createdDate: string;
}

export interface TypePartnershipResp extends TypePartnershipTable {
    partnershipType: string;
    ownAsset: boolean;
    investmentPlan: string;
    employeeNumber: string;
    contactTime: String;
    companyName: string;
    dialCode: string;
}

export interface TypePartnershipModal {
    showModal: boolean;
    selectedData: TypePartnershipResp | null;
    closeModal: () => void;
}

export interface TypePartnershipTableProps {
    dataTable: TypePartnershipResp[];
    isLoading: boolean
    showDetail: (selectedData: TypePartnershipResp) => void;
}
