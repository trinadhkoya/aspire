import axios from 'axios';

const BASE_URL = 'https://63a022977aaf11ceb8a855c8.mockapi.io/api/v1/';

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json',
};

const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export const get = async (url, config) =>
  await axiosApi
    .get(url, {
      ...config,
    })
    .then(response => response?.data);
