import axios from 'axios';

export default axios.create({
  baseURL: 'https://team-react-30-confeco-heroku.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
