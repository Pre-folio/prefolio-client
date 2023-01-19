import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { darken } from 'polished';

export interface PartCardProps {
  graphic?: string;
  varient: PartCardVarient;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
}

export type PartCardVarient = 'plan' | 'dev' | 'design';

const CARD_COLOR = {
  normal: {
    plan: `${theme.palette.Mint10}`,
    dev: `${theme.palette.Blue10}`,
    design: `${theme.palette.Purple10}`,
  },
  active: {
    plan: `${darken(0.03, theme.palette.Mint10)}`,
    dev: `${darken(0.03, theme.palette.Blue10)}`,
    design: `${darken(0.03, theme.palette.Purple10)}`,
  },
  selected: {
    plan: `${darken(0.05, theme.palette.Mint10)}`,
    dev: `${darken(0.05, theme.palette.Blue10)}`,
    design: `${darken(0.05, theme.palette.Purple10)}`,
  },
};

const CARD_FIELD = {
  plan: '기획',
  dev: '개발',
  design: '디자인',
};

/**
 * @param graphic: string (그래픽 이미지 주소)
 * @param varient: string
 * @param onClick: MouseEventHandler<HTMLButtonElement>
 * -------------------------------------
 * 카드 종류: 'plan' | 'dev' | 'design'
 */

export const PartCard = (props: PartCardProps) => {
  return (
    <PartCardWrapper
      varient={props.varient}
      selected={props.selected}
      onClick={props.onClick}
    >
      <MockGraphic />
      <Field>{CARD_FIELD[props.varient]}</Field>
    </PartCardWrapper>
  );
};

const PartCardWrapper = styled.button<{
  varient: PartCardVarient;
  selected?: boolean;
}>`
  width: 180px;

  padding: 40px 16px 40px 16px;
  border-radius: 14px;

  background-color: ${({ varient }) => CARD_COLOR.normal[varient]};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* &:hover {
    background-color: ${({ varient }) => CARD_COLOR.hover[varient]} !important;
  } */

  &:active {
    background-color: ${({ varient }) => CARD_COLOR.active[varient]} !important;
  }

  ${({ selected, varient }) =>
    css`
      background-color: ${selected
        ? `${CARD_COLOR.selected[varient]}`
        : `${CARD_COLOR.normal[varient]}`} !important;
    `}
`;

const MockGraphic = styled.div`
  width: 148px;
  height: 160px;

  background-color: ${theme.palette.Gray10};
`;

const Field = styled.div`
  height: 18px;
  width: 100%;

  margin-top: 24px;

  color: ${theme.palette.Black};
  ${theme.typo.Label1}

  display: flex;
  justify-content: center;
  align-items: center;
`;
