import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosRequestConfigOption extends AxiosRequestConfig {
    token: boolean; // Assuming want to add a property "token" of type boolean
}

export const axiosFetch = async (options: AxiosRequestConfigOption
)=> {
    const config: AxiosRequestConfig = {
        baseURL: 'https://web.svc.staging.fithubdev.com/v1/',
        // baseURL: 'http://localhost:3001/v1/',
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
    const instance: AxiosInstance = axios.create(config);
    const response: AxiosResponse = await instance(options);
    // const response: AxiosResponse = await Axios(options);
    return response;
};