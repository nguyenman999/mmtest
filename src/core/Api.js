import { API_URL } from "constants/Api";
import { stringify as queryStringify, parse as queryParser } from "qs";

export const getApiUrl = (path, params = {}) => {
  const queryParameters = Object.keys(params)
    .map(paramName => {
      return paramName + "=" + encodeURIComponent(params[paramName]);
    })
    .join("&");

  return (
    API_URL.BASE +
    path.replace(/^\/?/, "/") +
    (queryParameters !== "" ? `?${queryParameters}` : "")
  );
};

export const makeApiParams = (method = "GET", body, headers = undefined) => {
  if (headers === undefined) {
    headers = new Headers();
    headers.append("content-type", "application/json");
    headers.append("X-Requested-With", "XMLHttpRequest");
  }
  return {
    credentials: "same-origin",
    method: method,
    headers: headers,
    body: body
  };
};

export const fetchFromApi = (
  dispatch,
  url,
  params,
  successAction,
  failAction
) => {
  fetch(url, params)
    .then(checkApiResponse)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: successAction, data: data });
    })
    .catch(error => {
      dispatch({ type: failAction });
    });
};

export const fromQueryString = search => {
  return queryParser(search, { ignoreQueryPrefix: true });
};

export const toQueryString = (path, search = {}) => {
  const queries = queryStringify(search, { addQueryPrefix: true });
  return `${path}${queries}`;
};

const checkApiResponse = response => {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return Promise.resolve(response);
};
