import axios from 'axios';

export default axios.create({
  headers: {
    baseURL: 'https://api.unsplash.com',
    Authorization: `Authorization: Client-ID ${process.env.REACT_APP_Access_Key_KEY}`
  }
});
