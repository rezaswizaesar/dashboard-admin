import { useContext } from "react";
import { AppContext } from "../../../Store/Context/AppContext";

const Checkin: React.FC = () => {
    const { user } = useContext(AppContext)
    console.log('user => ', user)
    return <div>Checkin</div>;
};
export default Checkin;
