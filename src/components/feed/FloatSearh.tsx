import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../assets/icons';
import { Input, InputProps } from '../common/Input';
import { SearchBox } from '../common/SearchBox';

export interface FloatSearchProps extends InputProps {
  top: number;
}

export const FloatSearch = ({ top }: FloatSearchProps) => {
  const router = useRouter();
  return (
    <div style={{ position: 'relative' }}>
      <ToastContainer onClick={() => router.push('/search')} top={top}>
        <SearchBox width={792} height={58} />
      </ToastContainer>
    </div>
  );
};

const ToastContainer = styled.div<{
  top: number;
}>`
  width: 1200px;

  display: flex;
  justify-content: center;

  top: ${({ top }) => `${top}px`};
  z-index: 22;
  position: absolute;

  cursor: pointer;
`;
