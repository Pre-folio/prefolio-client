import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { Input } from '../common/Input';
import { Search } from '../common/Search';

export const FloatSearch = () => {
  const router = useRouter();
  return (
    <div style={{ position: 'relative' }}>
      <ToastContainer onClick={() => router.push('/search')}>
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

  cursor: pointer;
`;
