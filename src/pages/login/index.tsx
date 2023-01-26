import { LoginPage } from '../../components/login/LoginPage';

const Login = () => {
  return (
    <div>
      <LoginPage />
      <a href={process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}>카카오 로그인</a>
      <a href={process.env.NEXT_PUBLIC_KAKAO_OAUTH_URL}>카카오 로그인</a>
    </div>
  );
};

export default Login;
