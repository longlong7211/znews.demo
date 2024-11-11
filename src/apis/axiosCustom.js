import axios from 'axios'
const AxiosCustom = axios.create({
  baseURL: 'https://newsapi.org/v2'
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export { AxiosCustom }