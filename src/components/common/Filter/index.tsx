import styled, { CSSProperties } from 'styled-components';
import { shadow, theme } from '../../../styles/theme';
import { Row } from '../Wrapper';
import { CheckIcon } from '../../Icons/CheckIcon';
import { CancelIcon } from '../../Icons/CancelIcon';
import { MouseEventHandler } from 'react';

interface FilterProps {
  type: 'PLAN' | 'DEV' | 'DESIGN' | 'SOCIETY' | 'INTERN' | 'PROJECT' | any;
  isClicked?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  hasCancelButton?: boolean;
  onClickCancelButton?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IFilter {
  type: 'PLAN' | 'DEV' | 'DESIGN' | 'SOCIETY' | 'INTERN' | 'PROJECT' | any;
  isClicked?: boolean;
}

export function Filter({
  type,
  isClicked,
  onClick,
  style,
  hasCancelButton,
  onClickCancelButton,
}: FilterProps) {
  console.log(type, isClicked);
  return (
    <FilterButton
      id={type}
      type={type}
      isClicked={isClicked}
      onClick={onClick}
      name={type}
      style={style}
    >
      <Row
        id={type}
        justifyContent='center'
        alignItems='center'
        gap={hasCancelButton ? '8px' : '4px'}
        style={{ lineHeight: '34px', textAlign: 'center' }}
      >
        {!hasCancelButton && isClicked ? (
          <CheckIcon id={type} type={type} />
        ) : (
          ''
        )}
        {type === 'DEV'
          ? '개발'
          : type === 'DESIGN'
          ? '디자인'
          : type === 'PLAN'
          ? '기획'
          : type === 'SOCIETY'
          ? '동아리/학회'
          : type === 'INTERN'
          ? '인턴'
          : type === 'PROJECT'
          ? '프로젝트'
          : type}
        {hasCancelButton && (
          <CancelIcon id={type} onClick={onClickCancelButton} />
        )}
      </Row>
    </FilterButton>
  );
}

const FilterButton = styled.button<IFilter>`
  width: auto;
  height: 34px;
  padding: 8px 20px;
  border-radius: 6px;
  ${theme.typo.Body1};
  display: flex;

  align-items: center;
  background-color: ${(props) =>
    props.isClicked
      ? props.type === 'PLAN'
        ? theme.palette.Mint10
        : props.type === 'DEV'
        ? theme.palette.Blue10
        : props.type === 'DESIGN'
        ? theme.palette.Purple10
        : theme.palette.White
      : theme.palette.White};
  color: ${(props) =>
    props.isClicked
      ? props.type === 'PLAN'
        ? theme.palette.Minttext
        : props.type === 'DEV'
        ? theme.palette.Blue100
        : props.type === 'DESIGN'
        ? theme.palette.Purple100
        : theme.palette.Black
      : theme.palette.Gray40};
  box-shadow: ${(props) =>
    props.isClicked
      ? props.type === 'PLAN'
        ? shadow.Button.Green
        : props.type === 'DEV'
        ? shadow.Button.Blue
        : props.type === 'DESIGN'
        ? shadow.Button.Purple
        : shadow.Button.Black
      : ''};
`;
