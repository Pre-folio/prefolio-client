import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { SettingList } from '../../components/setting/SettingList';
import { userState } from '../../store/Auth/userState';

const Modify = (props: any) => {
  const { watchingUserId } = props;
  const user = useRecoilValue(userState);
  const router = useRouter();

  useEffect(() => {
    if (user.userId !== watchingUserId) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const watchingUserId = Number(id);
  return {
    props: { watchingUserId: watchingUserId },
  };
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
