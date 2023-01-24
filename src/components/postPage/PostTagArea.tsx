import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../styles/theme';
import { Tag } from '../common/Tag';
import { Column, Row } from '../common/Wrapper';

interface TagListProps {
  tags?: string[];
  tools?: string[];
  contribution?: number;
  role?: string;
  style?: CSSProperties;
}

export function PostTagArea({ tags, tools, contribution, role, style }: TagListProps) {
  return (
    <TagAreaWrapper style={style}>
      {(contribution || role) && <DivisionLine />}
      <Column gap="18px" justifyContent="flex-start" alignItems="flex-start">
        <Row gap="57px">
          <CategoryTextArea>태그</CategoryTextArea>
          <Row gap="12px" style={{ maxWidth: '380px', overflowX: 'scroll', backgroundColor: 'red' }}>
            {tags?.map((tag: any) => {
              if (tag === 'dev' || tag === 'plan' || tag === 'design') {
                return <Tag type={'field'} sort={tag} key={tag} />;
              } else {
                return <Tag type={'activity'} sort={tag} key={tag} style={{ backgroundColor: 'white' }} />;
              }
            })}
          </Row>
        </Row>
        <Row gap="38px">
          <CategoryTextArea>사용 툴</CategoryTextArea>
          <Row gap="12px">
            {tools?.map((tool: any) => {
              return <Tag type={'activity'} sort={tool} key={tool} style={{ backgroundColor: 'white' }} />;
            })}
          </Row>
        </Row>
      </Column>
      <Column
        gap="23px"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ position: 'absolute', left: 'calc(50% + 43px)' }}
      >
        {contribution && (
          <Row gap="48px">
            <CategoryTextArea>기여도</CategoryTextArea>
            <Tag type={'activity'} sort={`${contribution}%`} style={{ backgroundColor: 'white' }} />
          </Row>
        )}
        {role && (
          <Row gap="28px">
            <CategoryTextArea>맡은 역할 </CategoryTextArea>
            <RoleTextArea>{role}</RoleTextArea>
          </Row>
        )}
      </Column>
    </TagAreaWrapper>
  );
}

const TagAreaWrapper = styled.div`
  width: 996px;
  height: 122px;
  background-color: ${theme.palette.Gray10};
  padding: 24px 30px;
  border-radius: 8px;
  display: flex;
`;

const CategoryTextArea = styled.div`
  ${theme.typo.Label1};
  color: ${theme.palette.Gray40};
`;

const DivisionLine = styled.div`
  display: block;
  width: 1px;
  height: 74px;
  background-color: ${theme.palette.Gray20};
  position: relative;
  left: 50%;
  z-index: 1;
`;

const RoleTextArea = styled.div`
  ${theme.typo.Body2};
  color: ${theme.palette.Gray40};
`;
