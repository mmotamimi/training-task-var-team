import axios from 'axios'

export const eraApi = axios.create({
  baseURL: 'https://open.er-api.com/v6',
  timeout: 8000,
})

export const hostApi = axios.create({
  baseURL: 'https://api.exchangerate.host',
  timeout: 8000,
})
