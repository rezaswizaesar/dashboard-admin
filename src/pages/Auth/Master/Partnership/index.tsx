import {
    Row,
    Col,
    Form,
    message
} from 'antd';
import usePartnershipHandler from './Handler';
import PartnershipPageStyle from './Style';
import { useEffect } from 'react';
import ModalDetail from './Component/ModalDetail';
import TablePartnership from './Component/Table';
import SelectCostume from '../../../../components/Select';
import Loading from '../../../../components/Loading';

const PartnershipPage: React.FC = () => {
    const {
        partnerType,
        partnerTypeOption,
        onChangeType,
        isLoading,
        dataTable,
        isShowModal,
        selectedData,
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
                            name="partnerType"
                            value={partnerType}
                            dataTestId="select-type"
                            options={partnerTypeOption}></SelectCostume>
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
            <ModalDetail
                selectedData={selectedData}
                showModal={isShowModal}
                closeModal={closeDetail}
            />
        </PartnershipPageStyle>
    );
};
export default PartnershipPage;
