import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://web.svc.staging.fithubdev.com/v1/',
});

// Axios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers['Authorization'] = 'Bearer ' + token;
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );

export default Axios;
