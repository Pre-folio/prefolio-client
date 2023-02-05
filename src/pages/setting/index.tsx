import styled from 'styled-components';
import { SettingList } from '../../components/setting/SettingList';

const Setting = () => {
  return (
    <Wrapper>
      <SettingList isModify={false} />
    </Wrapper>
  );
};

export default Setting;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
