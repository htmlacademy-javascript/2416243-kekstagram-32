import {BASE_URL, METHODS, ROUTES} from './constants.js';

const load = (path, method, data = null) => fetch(`${BASE_URL}${path}`, {method: method, body: data})
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .catch(() => {
    throw new Error();
  });

export const getRequest = () => load(ROUTES.getData, METHODS.GET);

export const postRequest = (data) => load(ROUTES.postData, METHODS.POST, data);
