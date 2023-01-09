import styled from 'styled-components';
import { shadow, theme } from '../../styles/theme';

interface TagProps {
  type: 'activity' | 'field';
  color?: string;
  content?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface ITag {
  color?: 'mint' | 'blue' | 'purple' | any;
}

export function Tag({ type, color, content, onClick }: TagProps) {
  return type === 'activity' ? (
    <ActivityTag onClick={onClick}>{content || '동아리/학회'}</ActivityTag>
  ) : type === 'field' ? (
    <FieldTag color={color} onClick={onClick}>
      {content || '기획'}
    </FieldTag>
  ) : (
    <></>
  );
}

const ActivityTag = styled.button`
  padding: 6px 10px;
  width: auto;
  height: 28px;
  border-radius: 4px;
  background-color: ${theme.palette.Gray10};
  color: ${theme.palette.Gray50};
  box-shadow: ${shadow.Button.Black};
`;

const FieldTag = styled.button<ITag>`
  padding: 6px 10px;
  width: auto;
  height: 28px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.color === 'mint'
      ? theme.palette.Mint10
      : props.color === 'blue'
      ? theme.palette.Blue10
      : props.color === 'purple' && theme.palette.Purple10};
  color: ${(props) =>
    props.color === 'mint'
      ? theme.palette.Mint100
      : props.color === 'blue'
      ? theme.palette.Blue100
      : props.color === 'purple' && theme.palette.Purple100};
  box-shadow: ${(props) =>
    props.color === 'mint'
      ? shadow.Button.Green
      : props.color === 'blue'
      ? shadow.Button.Blue
      : props.color === 'purple' && shadow.Button.Purple};
`;
