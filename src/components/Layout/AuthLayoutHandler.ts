import React from "react";
import createAxiosInstance from "../../../service/FetchApi";
// import { useNavigate } from "react-router-dom";

const AuthLayoutHandler = ()=>{
  // const navigate = useNavigate()
  const { serviceApi: getConfigAuth, apiResponse: responseConfigAuth} = createAxiosInstance();
  const { serviceApi: getProfile, apiResponse: profileResponse} = createAxiosInstance();
  
  React.useEffect(()=>{
    if(responseConfigAuth.isError ){
      console.log("error")

      // APINYA BELUM ADA AKSES

      // localStorage.clear()
      // navigate("/")
    }
  }, [responseConfigAuth.isError])
  
  return {getConfigAuth, responseConfigAuth, getProfile}
}
export default AuthLayoutHandler;