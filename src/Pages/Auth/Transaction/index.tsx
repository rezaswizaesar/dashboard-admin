import { Select } from 'antd';
import { FC, useContext } from 'react';
import { AppContext } from '../../../Config/Context';
import useLocationList from '../../../Helper/Hooks/useLocationList';

const CSTransaction: FC = () => {
    const { state } = useContext(AppContext);
    const [locationList] = useLocationList();

    console.log('locationList => ', locationList);
    return (
        <div style={{ color: '#FFF' }}>
            {/* <Select
                labelInValue
                placeholder="Select a Location"
                defaultValue={state.locationUser}
                style={{ width: 300, background: '#FFF', borderRadius: '6px' }}
                options={locationList?.map((item) => {
                    return { label: item.name, value: item.name };
                })}
            /> */}
        </div>
    );
};

export default CSTransaction;
