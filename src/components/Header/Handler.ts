import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../config/Context";
import { useLocalStorage } from "../../helper/Hooks/useLocalStorage";
import { message } from "antd";
import { logout } from "../../config/Action";

const useHeaderHandler = () => {
  const [userTitle, setUserTitle] = useState<string>("")
  const { state, dispatch } = useContext(AppContext);
  const { clearItem } = useLocalStorage()

  const handleLogout = () => {
    dispatch(logout())
    clearItem()
    message.success("Successfully Logged Out!")

  }

  useEffect(() => {
    const title = state.email + " (" + state.typeUser + ") - " + state.locationUser
    setUserTitle(title)

  }, [])


  return { userTitle, function: { handleLogout } }
}

export default useHeaderHandler