import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
  ? 'https://eduardo-poke-api.herokuapp.com/api/'
  : 'http://localhost:3333/api'
})