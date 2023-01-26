import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 1);

  return cookies.set('accessToken', accessToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookie = () => {
  return cookies.get('accessToken');
};

export const removeCookie = () => {
  return cookies.remove('accessToken', { sameSite: 'strict', path: '/' });
};
