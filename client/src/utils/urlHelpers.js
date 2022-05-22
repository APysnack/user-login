import queryString from 'qs';

export const formatURL = (url, query) => {
  if (!query) {
    return url;
  }

  return `${url}?${queryString.stringify(query, {
    arrayFormat: 'brackets',
    encode: false,
  })}`;
};

export const getQueryObject = string => {
  string = string.replace('?', '');

  return queryString.parse(string, {
    arrayFormat: 'brackets',
  });
};

export const getQueryString = query => {
  return queryString.stringify(query, {
    arrayFormat: 'brackets',
    encode: false,
  });
};

export const setURL = (history, url, query) => {
  history.replace(`${url}?${getQueryString(query)}`);
};
