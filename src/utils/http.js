import axios from 'axios';

export const baseURL = 'https://team-react-30-confeco-heroku.herokuapp.com/';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* instance.interceptors.request.use(
  (config) => {
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      const { token } = userData;
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
); */

export default instance;