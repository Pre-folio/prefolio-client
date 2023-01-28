import { useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { Input } from '../common/Input';
import { Search } from '../common/Search';

export const FloatSearch = () => {
  const [color, setColor] = useState();
  return (
    <div style={{ position: 'relative' }}>
      <ToastContainer>
        <Search width={792} height={58} />
      </ToastContainer>
    </div>
  );
};

const ToastContainer = styled.div`
  width: 1200px;

  display: flex;
  justify-content: center;

  top: 413px;
  z-index: 22;
  position: absolute;
`;
