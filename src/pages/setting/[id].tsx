import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { SettingList } from '../../components/setting/SettingList';
import { userState } from '../../store/Auth/userState';

const Modify = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  const watchingUserId = router.query.id;

  useEffect(() => {
    if (user.userId !== Number(watchingUserId)) {
      // 잘못된 접근입니다.
      router.push('/feed');
    }
  }, []);

  return (
    <Wrapper>
      <SettingList isModify={true} />
    </Wrapper>
  );
};

export default Modify;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
