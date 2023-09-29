import {
    Row,
    Col,
    Form, //Select,
    message
} from 'antd';
import usePartnershipHandler from './handler';
import PartnershipPageStyle from './Partnerships.styles';
import { useEffect } from 'react';
import ModalDetailPartnership from '../../../../components/Partnership/ModalDetail';
import TablePartnership from '../../../../components/Partnership/Table';
import SelectCostume from '../../../../components/UI/Select';
import Loading from '../../../../components/UI/Loading';

const PartnershipPage: React.FC = () => {
    const {
        // selectType,
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
                        <SelectCostume
                            onChange={onChangeType}
                            name=""
                            dataTestId="select-type"
                            options={[
                                {
                                    label: 'Ownership',
                                    value: 'OWNERSHIP'
                                },
                                {
                                    label: 'Corporate Membership',
                                    value: 'CORPORATE MEMBERSHIP'
                                }
                            ]}></SelectCostume>
                    </Form.Item>
                </Col>
            </Row>
            {isLoading ? (
                <Loading />
            ) : (
                <div role="table-showing">
                    <TablePartnership
                        dataTable={dataTable}
                        showDetail={openDetail}
                    />
                </div>
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
