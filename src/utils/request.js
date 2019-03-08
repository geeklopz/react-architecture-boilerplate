// import Axios
import axios from 'axios';
// import Enum
import { DEFAULT_API_URLS } from './enum';
// import localStorage
import store from '../store';

// Get Enum
const withBaseURIContext = () =>
  process.env.NODE_ENV
    ? DEFAULT_API_URLS[process.env.NODE_ENV.toUpperCase()]
    : DEFAULT_API_URLS.DEVELOPMENT;

// BASE URL
const HTTPClient = axios.create({
  baseURL: withBaseURIContext()
});

// Interceptors Request
HTTPClient.interceptors.request.use(
  config => {
    store.commit(SET_API_CALL_IN_PROGRESS, true);

    // Get Token
    const token = getStorage('token');
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  response => Promise.reject(response)
);

// Error
HTTPClient.interceptors.response.use(
  response => {
    store.commit(SET_API_CALL_IN_PROGRESS, false);
    return response;
  },
  error => Promise.reject(error)
);

export { HTTPClient };
