const api = 'http://172.21.192.1:300/api/treinafood/';

export const ApiService = {
  get(endpoint) {
    return fetch(`${api}${endpoint}`).then((response) => response.json());
  },
  post(endpoint, data) {
    return fetch(`${api}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  },
};