import { Row, Col, Form, Select } from 'antd';
import React from 'react';
import PartnershipHandler from './PartnershipHandler';
import PartnershipPageStyle from './PartnershipPage.style';
import PartnershipTable from './PartnershipTable';
import Loading from '../../../../components/Loading';

const PartnershipPage: React.FC = () => {
    const { isLoading, onChangeType, dataTable } = PartnershipHandler();
    return (
        <PartnershipPageStyle>
            <Row gutter={24}>
                <Col span={4}>
                    <Form.Item wrapperCol={{ span: 24 }} label="Type">
                        <Select
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
            {/* <Loading/> */}
            {
                isLoading ? <Loading/> : <PartnershipTable dataTable={dataTable} />
            }
            
        </PartnershipPageStyle>
    );
};
export default PartnershipPage;
