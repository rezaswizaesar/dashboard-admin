import { Form } from 'antd';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../config/Action";
import { AppContext } from "../../../config/Context";
import { useLocalStorage } from "../../../helper/Hooks/useLocalStorage";
import { IFormLogin, ILoginRes, ILoginServiceError } from "../../../types/Login";
import { useLoginService } from '../../../Service/Login';

const useLoginHandler = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const { dispatch } = useContext(AppContext);
  const { setItem } = useLocalStorage()
  const service = useLoginService()
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async (values: IFormLogin) => {
    setIsLoading(true);
    let response = await service.postLogin(values)
    if ((response as ILoginServiceError).isSuccess === undefined) {
      dispatch(login(response as ILoginRes))
      setItem("token", response.token)
      navigate('/')
    } else {
      setIsSuccess(false);
    }
    setIsLoading(false);
  }
  return { onSubmit, isLoading, isSuccess, form }
}

export default useLoginHandler;