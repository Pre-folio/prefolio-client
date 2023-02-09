import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';
import { darken } from 'polished';
import { PartType } from '../../../apis/post';

export interface PartCardProps {
  graphic?: string;
  varient: PartType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
}

const CARD_COLOR = {
  active: {
    plan: `${darken(0.03, theme.palette.Mint10)}`,
    dev: `${darken(0.03, theme.palette.Blue10)}`,
    design: `${darken(0.03, theme.palette.Purple10)}`,
  },
  selected: {
    plan: `${theme.palette.Mint30}`,
    dev: `${theme.palette.Blue30}`,
    design: `${theme.palette.Purple30}`,
  },
};

const CARD_FIELD = {
  plan: '기획',
  dev: '개발',
  design: '디자인',
};

const CARD_GRAPHIC = {
  plan: 'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/plan.png',
  dev: 'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/dev.png',
  design:
    'https://s3.ap-northeast-2.amazonaws.com/prefolio.net-image/default/design.png',
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
      <Graphic src={`${CARD_GRAPHIC[props.varient]}`} />
      <Field>{CARD_FIELD[props.varient]}</Field>
    </PartCardWrapper>
  );
};

const PartCardWrapper = styled.button<{
  varient: PartType;
  selected?: boolean;
}>`
  width: 180px;

  padding: 40px 16px 40px 16px;
  border-radius: 14px;

  background-color: ${theme.palette.Gray10};
  box-shadow: ${theme.shadow.Card.Black};

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:active {
    background-color: ${({ varient }) => CARD_COLOR.active[varient]} !important;
  }

  ${({ selected, varient }) =>
    css`
      background-color: ${selected
        ? `${CARD_COLOR.selected[varient]}`
        : `${theme.palette.Gray10}`} !important;
    `}
`;

const Graphic = styled.img`
  width: 148px;
  height: 160px;

  background-color: transparent;
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
