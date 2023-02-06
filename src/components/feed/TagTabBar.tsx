import { useEffect } from 'react';
import { Dispatch, SetStateAction, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Dot } from '../../assets/icons';
import { useTagArea } from '../../hooks/useTagArea';
import { theme } from '../../styles/theme';
import { Text } from '../common/Wrapper';

export interface TabBarProps {
  sort: boolean;
  leftTab?: string;
  rightTab?: string;
  onClick?: any;
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
  sort,
  leftTab = '최신순',
  rightTab = '추천순',
  onClick,
}: TabBarProps) => {
  return (
    <TabBarWrapper>
      <Button id='new' barState={sort} onClick={onClick}>
        <Dot
          fill={sort ? `${theme.palette.Black}` : `${theme.palette.Gray20}`}
        />
        <Text typo='Body2' color={sort ? 'Black' : 'Gray20'} height={16}>
          {leftTab}
        </Text>
      </Button>
      <Button id='like' onClick={onClick} barState={sort}>
        <Dot
          fill={sort ? `${theme.palette.Gray20}` : `${theme.palette.Black}`}
        />
        <Text typo='Body2' color={sort ? 'Gray20' : 'Black'} height={16}>
          {rightTab}
        </Text>
      </Button>
    </TabBarWrapper>
  );
};

const TabBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  width: 128px;
`;

const Button = styled.button<{ barState: boolean }>`
  width: 58px;
  height: 16px;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0;
`;
