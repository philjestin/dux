const buildUrl = (endpoint, query) => {
  const url = new URL(endpoint);

  Object.entries(query)
    .forEach(([key, value]) => url.searchParams.append(key, value));

  return url;
};

const buildHeaders = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const handleErrors = response => (
  response.json()
);

const fetchApi = (endpoint, query = {}, httpMethod = 'GET', options = {}) => {
  return window.authFetchProxy(
    buildUrl(endpoint, query), {
      headers: buildHeaders(),
      method: httpMethod,
      ...options,
    }
  )
    .then(response => (
      handleErrors(response)
    ))
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
};

export default fetchApi;
