import styled, { CSSProperties } from 'styled-components';
import { shadow, theme } from '../../../styles/theme';
import { Row } from '../Wrapper';
import { CheckIcon } from '../../Icons/CheckIcon';
import { CancelIcon } from '../../Icons/CancelIcon';

interface FilterProps {
  type: 'plan' | 'dev' | 'design' | 'society' | 'intern' | 'project' | any;
  isClicked?: boolean | any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  hasCancelButton?: boolean;
  onClickCancelButton?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IFilter {
  type: 'plan' | 'dev' | 'design' | 'society' | 'intern' | 'project' | any;
  isClicked?: boolean;
}

export function Filter({ type, isClicked, onClick, style, hasCancelButton, onClickCancelButton }: FilterProps) {
  return (
    <FilterButton type={type} isClicked={isClicked} onClick={onClick} name={type} style={style}>
      <Row justifyContent="center" alignItems="center" gap={hasCancelButton ? '8px' : '4px'}>
        {!hasCancelButton && isClicked ? <CheckIcon type={type} /> : ''}
        {type === 'dev'
          ? '개발'
          : type === 'design'
          ? '디자인'
          : type === 'plan'
          ? '기획'
          : type === 'society'
          ? '동아리/학회'
          : type === 'intern'
          ? '인턴'
          : type === 'project'
          ? '프로젝트'
          : type}
        {hasCancelButton && <CancelIcon onClick={onClickCancelButton} />}
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
      ? props.type === 'plan'
        ? theme.palette.Mint10
        : props.type === 'dev'
        ? theme.palette.Blue10
        : props.type === 'design'
        ? theme.palette.Purple10
        : theme.palette.White
      : theme.palette.White};
  color: ${(props) =>
    props.isClicked
      ? props.type === 'plan'
        ? theme.palette.Minttext
        : props.type === 'dev'
        ? theme.palette.Blue100
        : props.type === 'design'
        ? theme.palette.Purple100
        : theme.palette.Black
      : theme.palette.Gray40};
  box-shadow: ${(props) =>
    props.isClicked
      ? props.type === 'plan'
        ? shadow.Button.Green
        : props.type === 'dev'
        ? shadow.Button.Blue
        : props.type === 'design'
        ? shadow.Button.Purple
        : shadow.Button.Black
      : ''};
`;
