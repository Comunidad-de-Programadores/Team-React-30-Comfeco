import axios from 'axios';

export const baseURL = 'https://team-react-30-confeco-heroku.herokuapp.com/';

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
