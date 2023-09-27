import useCheckinHandler from './handler';

const Checkin: React.FC = () => {
    const { state } = useCheckinHandler();
    return <div>Checkin</div>;
};
export default Checkin;
