import { Form } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import createAxiosInstance from '../../../Service/FetchApi';
import { FormLoginType } from '../../../types/LoginType';


const LoginHandler = ()=>{
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { serviceApi, apiResponse: responseSubmit } = createAxiosInstance();
  const onSubmit = (values: FormLoginType)=>{
    serviceApi({
      url: "/auth/login",
      method: 'POST',
      data: values,
      token: false
    });
  }
  React.useEffect(()=>{
    if(responseSubmit.isSuccess && responseSubmit.data){
      localStorage.setItem("token", responseSubmit.data.data.token)
      navigate('/checkin')
    }
  }, [responseSubmit.isSuccess, responseSubmit.data])
  return {onSubmit, responseSubmit, form}
}
export default LoginHandler