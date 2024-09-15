import axios from 'axios';
import {SecretManager} from '../config/environment';

export function getCommonHeaders() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}

const baseUrl = 'https://jsonplaceholder.typicode.com';
const api = axios.create({
  baseURL: baseUrl,
  headers: getCommonHeaders(),
});

// for auth

// api.interceptors.request.use(async request => {
//   const authToken = await AsyncStorage.getItem(LocalStorageKeys.TOKEN);
//   if (authToken) {
//     request.headers.Authorization = `Bearer ${authToken}`;
//   }

//   console.log(`requeest>>> ${request.headers.Authorization}`);

//   return request;
// });

/**
 * to post request through given url
 * @param url
 * @param data
 * @param successCallback
 * @param errorCallback
 * @returns
 */
export const Post = async (
  url: string,
  data: {},
  successCallback: (_arg0: unknown) => void,
  errorCallback: (_arg0: unknown) => void,
): Promise<void> => {
  api
    .post(url, data)
    .then(res => {
      successCallback(res.data);
    })
    .catch(err => {
      errorCallback(err?.message);
    });
};

/**
 * get method to fetch data from given url
 * @param url
 * @param successCallback
 * @param errorCallback
 */
export const Get = async (
  url: string,
  successCallback: (_arg0: unknown) => void,
  errorCallback: (_arg0: unknown) => void,
): Promise<void> => {
  api
    .get(url)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};
