import axios from 'axios';
import config from '../config';

// Instantiate axios
const _axios = axios.create({
  baseURL: 'http://localhost:5000',
});


export const details = {
  list: id => _axios.get(`/customer/details/${id}`),
};

export const posts = {
  list: id => _axios.get(`/customer/posts/${id}`),
  top: id => _axios.get(`/customer/posts/frequence/${id}`),
};

export const addName = {
  add: form => _axios.post('/customer/addname', form),
};

export default {
details,
addName,
posts,
};