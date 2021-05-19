import axios from 'axios';

const baseURL = "http://localhost:8000";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 7000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;