import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:4300/'
});

export default axiosClient;