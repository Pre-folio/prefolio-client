import { Dispatch, SetStateAction, useRef } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export interface TabBarProps {
  barState: boolean;
  setBarState: Dispatch<SetStateAction<boolean>>;
  leftTab?: string;
  rightTab?: string;
}

/**
 * @param barState: boolean (기본값: true)
 * @param setBarState: Dispatch<SetStateAction<boolean>>;
 * @param leftTab?: string (왼쪽 탭 텍스트)
 * @param rightTab?: string (오른쪽 탭 텍스트)
 * ---------------------------------------
 * true: 왼쪽
 * false: 오른쪽
 */

export const TagTabBar = ({
  barState,
  setBarState,
  leftTab = '・ 최신순',
  rightTab = '・ 추천순',
}: TabBarProps) => {
  const ref = useRef<HTMLDivElement[] | null[]>([]);

  const HandleTabClick = (e: any) => {
    setBarState(e.target === ref.current[0]?.childNodes[0]);
  };

  return (
    <TabBarWrapper>
      <div ref={(el) => (ref.current[0] = el)} onClick={HandleTabClick}>
        <Tab barState={barState}>{leftTab}</Tab>
      </div>
      <div ref={(el) => (ref.current[1] = el)} onClick={HandleTabClick}>
        <Tab barState={!barState}>{rightTab}</Tab>
      </div>
    </TabBarWrapper>
  );
};

const TabBarWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const Tab = styled.div<{
  barState: boolean;
}>`
  width: 64px;
  height: 16px;

  ${({ barState }) =>
    css`
      color: ${barState ? `${theme.palette.Black}` : `${theme.palette.Gray20}`};
    `}

  ${theme.typo.Body2}

  display: flex;
  justify-content: center;
  align-items: center;
`;
