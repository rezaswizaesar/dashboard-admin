import { Form } from 'antd';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import createAxiosInstance from '../../../Service/FetchApi';
import { FormLoginType } from '../../../types/LoginType';
import { AppContext } from '../../../Config/Context';
import { login } from '../../../Config/Action';
import { useLocalStorage } from '../../../Helper/Hooks/useLocalStorage';


const LoginHandler = () => {
  const { dispatch } = useContext(AppContext);
  const { setItem } = useLocalStorage()
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { serviceApi, apiResponse: responseSubmit } = createAxiosInstance();

  const onSubmit = (values: FormLoginType) => {
    serviceApi({
      url: "/auth/login",
      method: 'POST',
      data: values,
      token: false
    });
  }
  React.useEffect(() => {
    if (responseSubmit.isSuccess && responseSubmit.data) {
      const { token, user } = responseSubmit.data.data
      dispatch(login(user))
      setItem("token", token)
      navigate('/')
    }
  }, [responseSubmit.isSuccess, responseSubmit.data])
  return { onSubmit, responseSubmit, form }
}
export default LoginHandler