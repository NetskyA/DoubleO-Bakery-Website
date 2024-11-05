import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:3000", // Pastikan ini sesuai dengan port backend Anda
});

export default client;