import { useContext } from "react";
import { useLocalStorage } from "../../Helper/Hooks/useLocalStorage";
import { AppContext } from "../../Config/Context";
import { logout } from "../../Config/Action";
import { message } from "antd";

const useHeaderHandler = () => {
  const { state, dispatch } = useContext(AppContext);
  const { clearItem } = useLocalStorage()


  const handleLogout = () => {
    dispatch(logout())
    clearItem()
    message.success("Successfully Logged Out!")

  }
  return { state, function: { handleLogout } }
}
export default useHeaderHandler;