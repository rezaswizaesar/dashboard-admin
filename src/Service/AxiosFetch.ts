import { AxiosRequestConfig, AxiosResponse } from "axios";
import Axios from "./Axios";

interface AxiosRequestConfigOption extends AxiosRequestConfig {
    token: boolean; // Assuming want to add a property "token" of type boolean
}

export const axiosFetch = async (options: AxiosRequestConfigOption
)=> {
    // setApiResponse({
    //     ...apiResponse,
    //     isLoading: true
    // });
    const config: AxiosRequestConfig = {
        baseURL: 'https://web.svc.staging.fithubdev.com/v1/',
        timeout: 5000,
        headers: {
            ['Content-Type']: 'application/json'
        }
    };
    if (options.token) {
        config.headers = {
            ...config.headers,
            Authorization: 'Bearer ' + localStorage.getItem('token')
        };
    }

    try {
        const response: AxiosResponse = await Axios(options);
        console.log(response)
        // setApiResponse({
        //     isSuccess: true,
        //     data: response.data,
        //     error: null,
        //     isLoading: false,
        //     isError: false
        // });
        return response;
    } catch (err) {
        console.log(err)
        // setApiResponse({
        //     isSuccess: false,
        //     data: null,
        //     error: err,
        //     isLoading: false,
        //     isError: true
        // });
    }
    // setApiResponse({
    //     isSuccess: false,
    //     data: null,
    //     error: null,
    //     isLoading: false,
    //     isError: false
    // });
    
};