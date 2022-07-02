import axios from 'axios';

const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
const TIMEOUT = 5000

 const createAPI = () => {
    const api = axios.create({
        baseURL: URL,
        timeout: TIMEOUT,
    });
    return api;
}

export default createAPI;
