import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getTime() + 3 * 60 * 60 * 1000);

  return cookies.set('accessToken', accessToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const setRefreshToken = (refreshToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 14);

  return cookies.set('refreshToken', refreshToken, {
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
