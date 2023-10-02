import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../config/Context";
import { useLocalStorage } from "../../../helper/Hooks/useLocalStorage";
import { login, logout } from "../../../config/Action";
import { IAuthRes, IAuthServiceError } from "../../../types/Layout/Auth";
import { useAuthLayoutService } from "../../../service/AuthLayout";

const useAuthLayoutHandler = () => {
  const { dispatch } = useContext(AppContext);
  const { setItem } = useLocalStorage()
  const service = useAuthLayoutService()
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);
  
  // TODO :
  //  tambahkan service untuk fetch api `auth/config?appName=Dashboard`

  const fetchAuth = async () => {
    let response = await service.getAuth();
    if ((response as IAuthServiceError).isSuccess === undefined) {
      dispatch(login(response as IAuthRes))
      setItem("token", response.token)
    } else {
      setIsSuccess(false);
      dispatch(logout())
      navigate('/login');
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchAuth()
  }, [])

  return { isLoading, isSuccess }
}

export default useAuthLayoutHandler;