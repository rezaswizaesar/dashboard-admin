import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';
import ApiResponse from '../types/FetchApiType';
interface AxiosRequestConfigOption extends AxiosRequestConfig {
    token: boolean; // Assuming want to add a property "token" of type boolean
}
const createAxiosInstance = (): {
    serviceApi: (options: AxiosRequestConfigOption) => Promise<void>;
    apiResponse: ApiResponse;
} => {
    const [apiResponse, setApiResponse] = useState<ApiResponse>({
        isSuccess: false,
        data: null,
        error: null,
        isLoading: false,
        isError: false
    });
    const serviceApi = async (
        options: AxiosRequestConfigOption
    ): Promise<void> => {
        setApiResponse({
            ...apiResponse,
            isLoading: true
        });
        const config: AxiosRequestConfig = {
            baseURL: 'https://web-api-gateway-5c7p5x3a.an.gateway.dev/v1',
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
        try {
            const response: AxiosResponse = await instance(options);
            setApiResponse({
                isSuccess: true,
                data: response.data,
                error: null,
                isLoading: false,
                isError: false
            });
        } catch (err) {
            setApiResponse({
                isSuccess: false,
                data: null,
                error: err,
                isLoading: false,
                isError: true
            });
        }
    };
    return {
        serviceApi,
        apiResponse: {
            ...apiResponse
        }
    };
};

export default createAxiosInstance;
