import { useContext } from "react";
import { AppContext } from "../../../Config/Context";


const useCheckinHandler = () => {
  const { state } = useContext(AppContext);


  return {
    state
  }
}

export default useCheckinHandler;