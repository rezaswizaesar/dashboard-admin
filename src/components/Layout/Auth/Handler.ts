import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../config/Context";
import { useLocalStorage } from "../../../helper/Hooks/useLocalStorage";
import { useAuthLayoutService } from "../../../Service/AuthLayout";
import { login, logout } from "../../../config/Action";
import { IAuthRes, IAuthServiceError } from "../../../types/Layout/Auth";

const useAuthLayoutHandler = () => {
  const { dispatch } = useContext(AppContext);
  const { setItem } = useLocalStorage()
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);
  const service = useAuthLayoutService()
  const navigate = useNavigate();
  // TODO :
  //  tambahkan service untuk fetch api `auth/config?appName=Dashboard`
  //  tambahkan service untuk fetch api `/auth/me`

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


  // useEffect(() => {
  //   const token = getItem('token');
  //   if (token) {
  //     console.log('login');
  //     setIsLogin(true);
  //   } else {
  //     console.log('logout');
  //     setIsLogin(false);
  //   }
  // }, []);

  return { isLoading, isSuccess }
}

export default useAuthLayoutHandler;