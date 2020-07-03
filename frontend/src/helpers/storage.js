import Cookies from 'universal-cookie';

const cookie = new Cookies();

const defaulOptions = {
  path: '/',
}

export const getCookie = (name, options = {}) => {
  if(!name) return null;
  return cookie.get(name, { ...defaulOptions, ...options });
};

export const setCookie = (name, value, options = {}) => {
  if((name || value) === undefined) return null;
  cookie.set(name, value, { ...defaulOptions, ...options });
  return true;
};

export const removeCookie = (name, options = {}) => {
  if(!name) return null;
  cookie.remove(name, { ...defaulOptions, ...options });
  return true;
};