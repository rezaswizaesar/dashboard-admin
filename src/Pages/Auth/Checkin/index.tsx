import { Select } from "antd";
import useCheckinHandler from "./handler";

const Checkin: React.FC = () => {
    const { state, locationList } = useCheckinHandler()

    return (
        <div style={{ color: "#FFF" }}>
            <h1>{state.locationUser}</h1>
            <Select
                labelInValue
                placeholder="Select a Location"
                defaultValue={state.locationUser}
                style={{ width: 300 }}
                options={locationList?.map((item) => {
                    return ({ label: item.name, value: item.name })
                })
                }
            />
        </div>
    )
};
export default Checkin;
