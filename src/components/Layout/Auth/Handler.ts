import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../config/Context";
import { useLocalStorage } from "../../../helper/Hooks/useLocalStorage";
import { login, logout, setData } from "../../../config/Action";
import { IAuthRes, IAuthServiceError, IConfigRes, IConfigServiceError } from "../../../types/Layout/Auth";
import { useAuthLayoutService } from "../../../service/AuthLayout";
import handleAccessRole from "../../../helper/Handler/AccessRole";

const useAuthLayoutHandler = () => {
  const { state, dispatch } = useContext(AppContext);
  const { setItem, clearItem } = useLocalStorage()
  const service = useAuthLayoutService()
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const fetchAuth = async () => {
    let responseAuth = await service.getAuth();
    if ((responseAuth as IAuthServiceError).isSuccess === undefined) {
      dispatch(login(responseAuth as IAuthRes))
      setItem("token", responseAuth.token)
      fetchConfig()
    } else {
      setIsSuccess(false);
      clearItem()
      dispatch(logout())
      navigate('/login');
    }
    setIsLoading(false);
  }

  const fetchConfig = async () => {
    let responseConfig = await service.getConfig();
    if ((responseConfig as IConfigServiceError).isSuccess === undefined) {
      dispatch(setData({
        key: "config",
        data: responseConfig as IConfigRes
      }))
    } else {
      setIsSuccess(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchAuth()
  }, [])

  useEffect(() => {
    if (state.typeUser.length > 0) {
      const checkAccess = handleAccessRole(state.typeUser, location.pathname).length;
      let accessRole = checkAccess > 0 ? true : false;
      !accessRole && navigate('/checkin')
    }
  }, [state]);

  return { isLoading, isSuccess }
}

export default useAuthLayoutHandler;