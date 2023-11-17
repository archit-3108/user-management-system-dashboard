// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Placeholder API
});

export const fetchUsers = () => api.get('/users');
