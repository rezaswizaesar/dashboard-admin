import { Row, Col, Form, Select, message } from 'antd';
import usePartnershipHandler from './handler';
import PartnershipPageStyle from './styles';
import { useEffect } from 'react';
import ModalDetailPartnership from '../../../../Components/Partnership/ModalDetail';
import TablePartnership from '../../../../Components/Partnership/Table';
import Loading from '../../../../Components/Loading';

const PartnershipPage = () => {
    const {
        selectType,
        isLoading,
        dataTable,
        showModal,
        selectedData,
        onChangeType,
        openDetail,
        closeDetail,
        isSuccess
    } = usePartnershipHandler();

    useEffect(() => {
        if (!isSuccess) {
            message.warning('error fetching data !');
        }
    }, [isSuccess]);

    return (
        <PartnershipPageStyle>
            <Row gutter={24}>
                <Col span={4}>
                    <Form.Item wrapperCol={{ span: 24 }} label="Type">
                        <Select
                            value={selectType === '' ? null : selectType}
                            placeholder="Select Partnership Type"
                            onChange={onChangeType}
                            options={[
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
                            ]}></Select>
                    </Form.Item>
                </Col>
            </Row>
            {isLoading ? (
                <Loading />
            ) : (
                <TablePartnership
                    dataTable={dataTable}
                    showDetail={openDetail}
                />
            )}
            <ModalDetailPartnership
                selectedData={selectedData}
                showModal={showModal}
                closeModal={closeDetail}
            />
        </PartnershipPageStyle>
    );
};
export default PartnershipPage;
