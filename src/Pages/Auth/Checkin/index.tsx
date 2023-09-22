import useCheckinHandler from "./handler";

const Checkin: React.FC = () => {
    const { state } = useCheckinHandler()
    console.log('state => ', state)
    return <div>Checkin</div>;
};
export default Checkin;
