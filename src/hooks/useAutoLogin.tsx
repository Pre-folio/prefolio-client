import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState } from '../store/LoggedIn/loggedInState';
import { getCookie } from '../utils/cookie';

export default function useAutoLogin() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const accessToken = getCookie();

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    } else if (!accessToken) {
      setIsLoggedIn(false);
    }
  }, [accessToken]);
}
