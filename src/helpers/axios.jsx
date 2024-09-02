import axios from 'axios';
import { get } from 'lodash';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

instance.interceptors.request.use(config => {
    return config;
});

instance.interceptors.response.use(
    response => {
        return response?.data;
    },
    error => {
        const responseStatus = get(error, 'response.status', '');
        if ((responseStatus === 403 || responseStatus === 410)) {
            window.location.href = '/';
            localStorage.clear();
        }
        return Promise.reject(error?.response?.data);
    }
);

export default instance;
