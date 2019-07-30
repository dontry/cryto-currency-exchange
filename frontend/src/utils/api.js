import axios from "axios";

let cancel;
const promiseArray = {};
const CancelToken = axios.CancelToken;

//    --header 'apiToken: <API_TOKEN>' \ --header 'Content-Type: application/json' \ --header 'Accept: application/json' \ --url <URL>
const options = {
  baseURL: "http://localhost:8686",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  timeout: 10000
};

const httpClient = axios.create(options);

httpClient.interceptors.request.use(
  config => {
    if (promiseArray[config.url]) {
      promiseArray[config.url]("Cancel");
      promiseArray[config.url] = cancel;
    } else {
      promiseArray[config.url] = cancel;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(response => {
  if (/^2\w/.test(response.status.toString())) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
});

function handleNetworkError(reject) {
  return error => {
    reject(error);
  };
}

export default {
  get(url, params) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "get",
        url,
        params,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  },
  post(url, payload) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "post",
        url,
        data: payload,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "delete",
        url,
        params,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  },
  put(url, payload) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "put",
        url,
        data: payload,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  }
};
