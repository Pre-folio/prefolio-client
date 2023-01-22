import { LoginPage } from '../../components/login/LoginPage';

const Login = () => {
  return (
    <div>
      <LoginPage />
      <a href='https://kauth.kakao.com/oauth/authorize?client_id=448df92a872863d23fb53063e2ea6e12&redirect_uri=http://localhost:3000/oauth/callback/kakao&response_type=code'>
        카카오 로그인
      </a>
    </div>
  );
};

export default Login;
