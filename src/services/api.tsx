import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/efrontcommunity/data-naped'
});

export default api;
