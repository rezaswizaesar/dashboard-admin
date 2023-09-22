import { Checkbox, Form, Modal } from 'antd';
import { TypePartnershipModal } from '../../types/Partnership';

const ModalDetailPartnership = (Props: TypePartnershipModal) => {
    const { showModal, closeModal, selectedData } = Props;

    return (
        <Modal
            title="Details"
            zIndex={10}
            width={600}
            open={showModal}
            onCancel={closeModal}
            destroyOnClose={true}>
            <Form labelAlign="left" labelCol={{ span: 8 }}>
                <Form.Item label="Partnership Type">
                    {selectedData?.partnershipType ?? null}
                </Form.Item>
                {selectedData?.partnershipType === 'CORPORATE MEMBERSHIP' && (
                    <Form.Item label="Company Name">
                        {selectedData?.companyName ?? null}
                    </Form.Item>
                )}
                <Form.Item label="Name">
                    {selectedData?.personName ?? null}
                </Form.Item>
                <Form.Item label="Phone">
                    {selectedData
                        ? `${selectedData?.dialCode} 
                        ${selectedData?.phone.replace(/^0+/, '')}`
                        : null}
                </Form.Item>
                <Form.Item label="Email">
                    {selectedData?.email ?? null}
                </Form.Item>
                <Form.Item label="Preferred Contact Time">
                    {selectedData?.contactTime !== null &&
                    selectedData?.contactTime !== 'Choose Here' &&
                    selectedData?.contactTime !== ''
                        ? selectedData?.contactTime
                        : 'Not filled'}
                </Form.Item>
                {selectedData?.partnershipType === 'CORPORATE MEMBERSHIP' && (
                    <Form.Item label="Number of employee">
                        {selectedData?.employeeNumber !== null &&
                        selectedData?.employeeNumber !== 'Total Employees' &&
                        selectedData?.employeeNumber !== ''
                            ? selectedData?.employeeNumber
                            : 'Not filled'}
                    </Form.Item>
                )}
                {selectedData?.partnershipType !== 'CORPORATE MEMBERSHIP' && (
                    <>
                        <Form.Item label="Investment Plan">
                            {selectedData?.investmentPlan !== null &&
                            selectedData?.investmentPlan !== 'Select Amount' &&
                            selectedData?.investmentPlan !== ''
                                ? selectedData?.investmentPlan
                                : 'Not filled'}
                        </Form.Item>
                        <Form.Item label="Asset / Property Owned">
                            {selectedData?.ownAsset !== null ? (
                                <Checkbox
                                    defaultChecked={
                                        typeof selectedData?.ownAsset ===
                                        'string'
                                            ? selectedData?.ownAsset === 'true'
                                            : selectedData?.ownAsset
                                    }
                                    disabled
                                />
                            ) : (
                                'Not filled'
                            )}
                        </Form.Item>
                    </>
                )}
            </Form>
        </Modal>
    );
};

export default ModalDetailPartnership;
