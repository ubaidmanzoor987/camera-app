import axios, { AxiosRequestConfig } from 'axios';

import { API_URL, REQUEST_HEADERS } from '@/constants/api';

import { IRequestBody } from './service.types';

export const postRequest = (url: string, body: IRequestBody | any, config?: AxiosRequestConfig) => {
  return axios.post(API_URL + url, body, config);
};

export const postRequestWithToken = (url: string, body: IRequestBody | any, config?: AxiosRequestConfig) => {
  return axios.post(API_URL + url, body, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      apikey: '',
      authkey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InwwfDR8TU5ZT0ktR1FFRVotR1FFRVotTkdTWUR8Q3VzdG9tZXIiLCJuYmYiOjE2NjExNjQ0NDksImV4cCI6MTc0NzQ3ODA0OSwiaWF0IjoxNjYxMTY0NDQ5fQ.Xzf5jL0GttEwuCuH6Di187oGFJbuHQZLEN5oxo4Ue-k`,
      ...config?.headers,
    },
  });
};

export const postRequestFormData = (url: string, body: IRequestBody | any, config?: AxiosRequestConfig) => {
  return axios.post(API_URL + url, body, {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
      apikey: '',
      authkey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InwwfDR8TU5ZT0ktR1FFRVotR1FFRVotTkdTWUR8Q3VzdG9tZXIiLCJuYmYiOjE2NjExNjQ0NDksImV4cCI6MTc0NzQ3ODA0OSwiaWF0IjoxNjYxMTY0NDQ5fQ.Xzf5jL0GttEwuCuH6Di187oGFJbuHQZLEN5oxo4Ue-k`,
      ...config?.headers,
    },
  });
};

export const putRequest = (url: string, body: IRequestBody | any) => {
  return axios.put(API_URL + url, body);
};

export const getRequest = (url: string, config?: AxiosRequestConfig) => {
  return axios.get(API_URL + url, {
    ...config,
    headers: {
      ...REQUEST_HEADERS,
      ...config?.headers,
    },
  });
};
