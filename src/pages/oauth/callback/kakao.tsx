import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useUser } from '../../../hooks/useUser';

const Callback = () => {
  const router = useRouter();
  const { code } = router.query;
  const { kakaoValidationMutation } = useAuth();

  useEffect(() => {
    if (code && typeof code === 'string') {
      kakaoValidationMutation.mutate(code);
    }
  }, [code]);

  return <div></div>;
};

export default Callback;
