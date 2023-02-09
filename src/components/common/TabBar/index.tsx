import { Dispatch, SetStateAction, useRef } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

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

export const TabBar = ({
  barState,
  setBarState,
  leftTab = '내가 쓴 글',
  rightTab = '스크랩',
}: TabBarProps) => {
  const ref = useRef<HTMLDivElement[] | null[]>([]);

  const HandleTabClick = (e: any) => {
    setBarState(e.target === ref.current[0]?.childNodes[0]);
  };

  return (
    <TabBarWrapper>
      <div ref={(el) => (ref.current[0] = el)} onClick={HandleTabClick}>
        <Tab barState={barState}>{leftTab}</Tab>
        <TabLine barState={barState} isLeftTab={true} />
      </div>
      <div ref={(el) => (ref.current[1] = el)} onClick={HandleTabClick}>
        <Tab barState={!barState}>{rightTab}</Tab>
        <TabLine barState={!barState} isLeftTab={false} />
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
  width: 142px;
  height: 47px;
  padding-bottom: 22px;

  ${({ barState }) =>
    css`
      color: ${barState
        ? `${theme.palette.Gray50}`
        : `${theme.palette.Gray30}`};
    `}

  ${({ barState }) => (barState ? theme.typo.Heading4 : theme.typo.Heading5)};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out;
`;

const TabLine = styled.div<{
  barState: boolean;
  isLeftTab: boolean;
}>`
  width: 142px;
  height: 0px;

  border: ${({ barState }) =>
    barState ? `1.5px solid ${theme.palette.Gray50}` : 0};

  border-radius: 2px;
`;
