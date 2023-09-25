import useCheckinHandler from "./handler";

const Checkin: React.FC = () => {
    const { state } = useCheckinHandler()
    
    return <div style={{ color: "#FFF" }}>
        <h1>{state.locationUser}</h1>
    </div>;
};
export default Checkin;
