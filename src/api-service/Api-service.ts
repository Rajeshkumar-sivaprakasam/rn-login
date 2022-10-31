import axios from 'axios';
import state from '../store';
import config from '../utils/config';

//base api service for all file
const instance = axios.create({
  baseURL: `${config.api.baseURL}`,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (conf) {
    // Do something before request is sent
    state.error = '';
    state.isLoading = true;
    return conf;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.status === 200) {
      setInterval(() => {
        state.isLoading = false;
      }, 2000);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    state.error = error;
    return Promise.reject(error);
  },
);

export default instance;
