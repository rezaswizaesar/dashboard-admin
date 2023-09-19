import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";

const Checkin: React.FC = () => {
    const { user } = useContext(AuthContext)

    console.log("context =>  ", user)
    return <div>Checkin</div>;
};
export default Checkin;
