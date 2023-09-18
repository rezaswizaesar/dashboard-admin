import { Form } from 'antd';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import createAxiosInstance from '../../../Service/FetchApi';
import { FormLoginType } from '../../../types/LoginType';
import { AuthContext } from '../../../Context/AuthContext';


const LoginHandler = () => {
  const { setUser } = useContext(AuthContext)
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
      localStorage.setItem("token", responseSubmit.data.data.token)
      const { token, user } = responseSubmit.data.data
      console.log('token => ', token)
      setUser({
        authentication: true,
        location: user.locationUser,
        email: user.email,
        jwToken: token,
        locationArea: user.locationArea,
        approver: user.email,
        type: user.typeUser,
      })
      navigate('/checkin')
    }
  }, [responseSubmit.isSuccess, responseSubmit.data])
  return { onSubmit, responseSubmit, form }
}
export default LoginHandler