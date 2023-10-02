
import { axiosFetch } from "../../helper/Axios/AxiosFetch";
import { GetAuthConfigService, IGetAuthConfigServiceError, IGetAuthConfigServiceRes } from "../../types/Global/GetAuthConfig";

export const getAuthConfig = async () => {
  try {
    const data = await axiosFetch({
      url: "/auth/config",
      method: "GET",
      token: true,
      params: {
        appName: "Dashboard"
      }
    })
   
    const newValue = (data:string) => {
      let endcript_data = JSON.parse(atob(data))
      
      return {
        GENERATE_SOURCEMAP: endcript_data.GENERATE_SOURCEMAP,
        REACT_APP_API_ENDPOINT: endcript_data.REACT_APP_API_ENDPOINT,
        REACT_APP_API_ENDPOINT_V2: endcript_data.REACT_APP_API_ENDPOINT_V2,
        REACT_APP_AUTHORIZATION_GOOGLE_ANALYTIC: endcript_data.REACT_APP_AUTHORIZATION_GOOGLE_ANALYTIC,
        REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID: endcript_data.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
        REACT_APP_AWS_COGNITO_REGION: endcript_data.REACT_APP_AWS_COGNITO_REGION,
        REACT_APP_AWS_PROJECT_REGION: endcript_data.REACT_APP_AWS_PROJECT_REGION,
        REACT_APP_AWS_S3_BUCKET_PHOTO: endcript_data.REACT_APP_AWS_S3_BUCKET_PHOTO,
        REACT_APP_AWS_S3_BUCKET_PHOTO_URL: endcript_data.REACT_APP_AWS_S3_BUCKET_PHOTO_URL,
        REACT_APP_AWS_S3_KEYACCESS_FHAD:endcript_data.REACT_APP_AWS_S3_KEYACCESS_FHAD,
        REACT_APP_AWS_S3_KEYID_FHAD: endcript_data.REACT_APP_AWS_S3_KEYID_FHAD,
        REACT_APP_AWS_USER_POOLS_ID: endcript_data.REACT_APP_AWS_USER_POOLS_ID,
        REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID: endcript_data.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
        REACT_APP_BRAZE_API_KEY: endcript_data.REACT_APP_BRAZE_API_KEY,
        REACT_APP_BRAZE_APP_ID: endcript_data.REACT_APP_BRAZE_APP_ID,
        REACT_APP_BRAZE_ENDPOINT: endcript_data.REACT_APP_BRAZE_ENDPOINT,
        REACT_APP_ENV: endcript_data.REACT_APP_ENV,
        REACT_APP_FHAD_DOMAIN: endcript_data.REACT_APP_FHAD_DOMAIN,
        REACT_APP_FIREBASE_API_KEY: endcript_data.REACT_APP_FIREBASE_API_KEY,
        REACT_APP_FIREBASE_APP_ID: endcript_data.REACT_APP_FIREBASE_APP_ID,
        REACT_APP_FIREBASE_AUTH_DOMAIN: endcript_data.REACT_APP_FIREBASE_AUTH_DOMAIN,
        REACT_APP_FIREBASE_MEASUREMENT_ID: endcript_data.REACT_APP_FIREBASE_MEASUREMENT_ID,
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID: endcript_data.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        REACT_APP_FIREBASE_PROJECT_ID: endcript_data.REACT_APP_FIREBASE_PROJECT_ID,
        REACT_APP_FIREBASE_STORAGE_BUCKET: endcript_data.REACT_APP_FIREBASE_STORAGE_BUCKET,
        REACT_APP_FIREBASE_USERS_EMAIL: endcript_data.REACT_APP_FIREBASE_USERS_EMAIL,
        REACT_APP_FIREBASE_USERS_PASSWORD: endcript_data.REACT_APP_FIREBASE_USERS_PASSWORD,
        REACT_APP_GOOGLE_ANALYTIC: endcript_data.REACT_APP_GOOGLE_ANALYTIC,
        SKIP_PREFLIGHT_CHECK: endcript_data.SKIP_PREFLIGHT_CHECK
      }
    }
    const updateValue = newValue(data.data.data)
    return updateValue
  } catch (error) {
    console.log(error)
    return {
      isSuccess: false,
    } as IGetAuthConfigServiceError  }
}

export function useGetAuthConfigService(): GetAuthConfigService {
  return {
    getAuthConfig,
  }
}