import styled from 'styled-components';
import { shadow, theme } from '../../../styles/theme';
import { Row } from '../Wrapper';
import { CheckIcon } from '../../Icons/CheckIcon';

interface FilterProps {
  type: 'plan' | 'dev' | 'design' | 'society' | 'intern' | 'project';
  isClicked?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IFilter {
  type: 'plan' | 'dev' | 'design' | 'society' | 'intern' | 'project' | any;
  isClicked?: boolean;
}

export function Filter({ type, isClicked, onClick }: FilterProps) {
  return (
    <FilterButton type={type} isClicked={isClicked} onClick={onClick} name={type}>
      <Row justifyContent="center" alignItems="center" gap="4px">
        {isClicked ? <CheckIcon type={type} /> : ''}
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
          : type === 'project' && '프로젝트'}
      </Row>
    </FilterButton>
  );
}

const FilterButton = styled.button<IFilter>`
  width: auto;
  height: 34px;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: ${theme.typo.Body1};
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
