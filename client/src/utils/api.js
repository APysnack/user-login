import { formatURL } from './urlHelpers';
import { camelcaseKeys } from './fetchHelpers';
import snakecase from 'lodash.snakecase';

const jsonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const API_URL = 'http://localhost:3000'
class API {
    jsonRequest = ({ uri, method, body, headers, credentials }) => {
        credentials = credentials || 'same-origin';
        headers = headers || jsonHeaders;
    
        return fetch(uri, {
          credentials,
          headers,
          method,
          body,
        }).then(this.parseJson);
    };
    
    parseJson = response => {
        if (!response.ok) {
          console.warn('error in request', response);
          return response.json().then(body => {
            const errors = 'errors' in body ? body.errors : body.error;
    
            return Promise.reject({
              body,
              status: response.status,
              error: errors,
            });
          });
        } else {
          return response
            .text()
            .then(body => (body ? JSON.parse(body, camelcaseKeys) : ''));
        }
    };

    get = (url, query = {}, headers) => {
        url = formatURL(url, query);
        return this.jsonRequest({ uri: url, method: 'GET', headers });
    };
    
    put = (url, body) => {
        return this.jsonRequest({
          uri: url,
          method: 'PUT',
          body: JSON.stringify(body),
        });
    };
    
    patch = (url, body) => {
        return this.jsonRequest({
          uri: url,
          method: 'PATCH',
          body: JSON.stringify(body),
        });
    };
    
    post = (url, body) => {
        return this.jsonRequest({
          uri: url,
          method: 'POST',
          body: JSON.stringify(body),
        });
    };
    
    delete = url => {
        return this.jsonRequest({ uri: url, method: 'DELETE' });
    };

    // not 100% sure if this is the correct endpoint, but appears to be
    register = (user) => {
      return this.post(API_URL + '/users', { user: user });
    };

    login = (user) => {
        return this.post(API_URL + '/users/sign_in', { user: user });
    };

}

export default new API();