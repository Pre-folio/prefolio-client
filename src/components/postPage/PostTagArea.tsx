import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../styles/theme';

interface TagListProps {
  tags?: string[];
  tools?: string[];
  contribution?: number;
  style?: CSSProperties;
}

export function PostTagArea({ tags, tools, contribution, style }: TagListProps) {
  return (
    <TagAreaWrapper style={style}>
      <div>PostTagArea</div>
    </TagAreaWrapper>
  );
}

const TagAreaWrapper = styled.div`
  width: 996px;
  height: 122px;
  background-color: ${theme.palette.Gray10};
  padding: 24px 30px;
  border-radius: 8px;
`;
