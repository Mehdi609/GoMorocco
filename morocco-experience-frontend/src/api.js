

import axios from 'axios';

// Create an Axios instance with the base URL pointing to your Laravel API
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Make sure this points to your Laravel backend
  headers: {
    'Content-Type': 'application/json',
  },
});




export default API;