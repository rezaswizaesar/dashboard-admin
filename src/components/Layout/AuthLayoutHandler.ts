import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setData } from "../../config/Action";
import { AppContext } from "../../config/Context";
import handleAccessRole from "../../Helper/Handler/handleAccessRole";
import { useGetAuthConfigService } from "../../Service/Global/getAuthConfig";
import { useGetProfileService } from "../../Service/Global/getProfile";
import { IGetAuthConfigServiceError, IGetAuthConfigServiceRes } from "../../types/Global/GetAuthConfig";
import { IGetProfileServiceRes, IGetProfileServiceServiceError } from "../../types/Global/GetProfile";

const AuthLayoutHandler = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const { state, dispatch } = useContext(AppContext);
  const service = useGetProfileService()
  const serviceAuth = useGetAuthConfigService()
  const [dataAuth, setDataAuth] = React.useState<IGetAuthConfigServiceRes>()
  const [dataProfile, setDataProfile] = React.useState<IGetProfileServiceRes>()
 const [checkAccessRole, setAccessRole] = React.useState<boolean>(true)
 const handleGetConfigAuth = async ()=>{

  let response = await serviceAuth.getAuthConfig()
    if((response as IGetAuthConfigServiceError).isSuccess === undefined) {  
      setDataAuth(response as IGetAuthConfigServiceRes); 
    }else{
      navigate("/login")
        // setIsSuccess(false);
    }
  }
  const handleGetProfile =async ()=>{
    let response = await service.getProfile()
    if((response as IGetProfileServiceServiceError).isSuccess === undefined) {  
        setDataProfile(response as IGetProfileServiceRes); 
        dispatch(setData({
            key: "profile",
            data: response
        }))
    }else{
      navigate("/login")
        // setIsSuccess(false);
    }
  }
  React.useEffect(() => {
    if (state?.profile?.typeUser?.length > 0) {
      const checkAcess = handleAccessRole(state?.profile?.typeUser, location.pathname).length
      setAccessRole(checkAcess > 0 ? true : false);
    }
  }, [state]);
  return { dataProfile,  handleGetProfile, handleGetConfigAuth, dataAuth, checkAccessRole}
}
export default AuthLayoutHandler;