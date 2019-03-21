import axios from 'axios';

const messageAxios = axios.create({
    baseURL: "http://localhost:10000"
});

export default messageAxios;