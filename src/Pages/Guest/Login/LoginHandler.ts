import { Form } from 'antd';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../../Hooks/useLocalStorage';
import createAxiosInstance from '../../../Service/FetchApi';
import { login } from '../../../Store/Context/MyAction';
import { AppContext } from '../../../Store/Context/MyContext';
import { FormLoginType } from '../../../types/LoginType';


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
      const { user, token } = responseSubmit.data.data
      setItem("token", token)
      dispatch(login(user))
      navigate('/checkin')
    }
  }, [responseSubmit.isSuccess, responseSubmit.data])
  return { onSubmit, responseSubmit, form }
}
export default LoginHandler