import { FC } from 'react';
import { Form, Select } from 'antd';
import useCheckinHandler from './_handler';
import Title from 'antd/es/typography/Title';

const Checkin: FC = () => {
    const {
        locationUser,
        locationList,
        isLoading,
        function: { handleLocation }
    } = useCheckinHandler();
    return (
        <div>
            <Title level={3} style={{ color: '#FFF' }}>
                {locationUser}
            </Title>
            <Form.Item>
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
                        return { label: item.name, value: item.name };
                    })}
                />
            </Form.Item>
        </div>
    );
};
export default Checkin;
