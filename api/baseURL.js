import axios from 'axios';
const baseURL = axios.create({
    baseURL: 'https://admin-client-server.herokuapp.com'
});

export default baseURL;