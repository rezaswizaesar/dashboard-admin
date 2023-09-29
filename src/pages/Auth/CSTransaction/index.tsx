import { FC } from 'react';
import { Form, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import useCSTransactionHandler from './_handler';

const CSTransaction: FC = () => {
    const {
        locationUser,
        locationList,
        isLoading,
        function: { handleLocation }
    } = useCSTransactionHandler();

    return (
        <div style={{ margin: '1rem auto', minHeight: '100vh' }}>
            <Form.Item>
                <Title level={5} style={{ color: '#FFF' }}>
                    Locations
                </Title>
                <Select
                    placeholder="Select a Location"
                    style={{
                        width: 300,
                        background: '#FFF',
                        borderRadius: '6px'
                    }}
                    value={locationUser}
                    loading={isLoading}
                    disabled={isLoading}
                    onChange={handleLocation}
                    options={locationList?.map((item) => {
                        return {
                            label: item.name,
                            value: item.name
                        };
                    })}
                />
            </Form.Item>
        </div>
    );
};

export default CSTransaction;
