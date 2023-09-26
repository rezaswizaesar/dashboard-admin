import { Select } from 'antd';
import useCheckinHandler from './handler';
import useLocationList from '../../../Helper/Hooks/useLocationList';

const Checkin: React.FC = () => {
    const { state } = useCheckinHandler();
    // const { isLoading, locationList } = useLocationList();
    const [isLoading, locationList] = useLocationList();

    console.log('locationList => ', locationList);
    console.log('isLoading => ', isLoading);
    return (
        <div style={{ color: '#FFF' }}>
            <h1>{state.locationUser}</h1>
            {/* <Select
                labelInValue
                placeholder="Select a Location"
                defaultValue={state.locationUser}
                style={{ width: 300, background: '#FFF', borderRadius: '6px' }}
                // loading={isLoading}
                // disabled={isLoading}
                options={locationList?.map((item) => {
                    return { label: item.name, value: item.name };
                })}
            /> */}
        </div>
    );
};
export default Checkin;
