import { FC } from 'react';
import { Form, Select, Button } from 'antd';
import Title from 'antd/es/typography/Title';
import useCSTransactionHandler from './Handler';

const CSTransactionPage: FC = () => {
    const {
        locationUser,
        locationList,
        isLoading,
        function: { handleLocation, removeLocation, displayLocation }
    } = useCSTransactionHandler();

    return (
        <div
            style={{
                margin: '1rem auto',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
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
            <Form.Item style={{ display: 'flex', gap: '10px' }}>
                <Button onClick={removeLocation} style={{marginRight:"16px"}}>Clear Location</Button>
                <Button onClick={displayLocation}>display Location</Button>
            </Form.Item>
        </div>
    );
};

export default CSTransactionPage;
