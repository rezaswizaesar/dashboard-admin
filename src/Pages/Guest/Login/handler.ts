import { message } from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Config/Action";
import { AppContext } from "../../../Config/Context";
import { useLocalStorage } from "../../../Helper/Hooks/useLocalStorage";
import { useLoginService } from "../../../Service/Login";
import { IFormLogin, ILoginRes, ILoginServiceError } from "../../../types/Login";
import { Form } from 'antd';

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
      message.success("Succesfully Logged In!")
    } else {
      setIsSuccess(false);
    }
    setIsLoading(false);
  }
  return { onSubmit, isLoading, isSuccess, form }
}

export default useLoginHandler;