import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useUser } from '../../../hooks/useUser';

const Callback = () => {
  const router = useRouter();
  const { code } = router.query;
  const { kakaoValidationMutation } = useAuth(code);

  useEffect(() => {
    if (code && typeof code === 'string') {
      kakaoValidationMutation.mutate(code);
    }
  }, [code]);

  return <div>hi</div>;
};

export default Callback;
