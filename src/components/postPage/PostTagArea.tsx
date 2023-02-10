import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../styles/theme';
import { Tag } from '../common/Tag';
import { Column, Flex, Row } from '../common/Wrapper';

interface TagListProps {
  tags?: string[];
  tools?: string[];
  contribution?: number;
  role?: string;
  style?: CSSProperties;
}

export function PostTagArea({
  tags,
  tools,
  contribution,
  role,
  style,
}: TagListProps) {
  return (
    <TagAreaWrapper style={style}>
      {(contribution || role) && <DivisionLine />}
      <GridWrapper>
        <Row
          gap='57px'
          style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
        >
          <CategoryTextArea>태그</CategoryTextArea>
          <Row
            gap='12px'
            justifyContent='flex-start'
            alignItems='flex-start'
            style={{ maxWidth: '360px', flexWrap: 'wrap' }}
          >
            {tags?.map((tag: any, index: number) => {
              if (tag === 'dev' || tag === 'plan' || tag === 'design') {
                return (
                  <Tag
                    type={'field'}
                    sort={tag}
                    key={index}
                    style={{ wordBreak: 'keep-all' }}
                  />
                );
              } else {
                return (
                  <Tag
                    type={'activity'}
                    sort={tag}
                    key={index}
                    style={{ backgroundColor: 'white', wordBreak: 'keep-all' }}
                  />
                );
              }
            })}
          </Row>
        </Row>

        {contribution && (
          <Row
            gap='48px'
            justifyContent='flex-start'
            alignItems='flex-start'
            style={{ paddingLeft: '30px' }}
          >
            <CategoryTextArea>기여도</CategoryTextArea>
            <Tag
              type={'activity'}
              sort={`${contribution}%`}
              style={{ backgroundColor: 'white' }}
            />
          </Row>
        )}
        <Row
          gap='38px'
          style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}
        >
          <CategoryTextArea>사용 툴</CategoryTextArea>
          <Row
            gap='12px'
            justifyContent='flex-start'
            style={{ maxWidth: '360px', flexWrap: 'wrap' }}
          >
            {tools?.map((tool: any, index: number) => {
              return (
                <Tag
                  type={'activity'}
                  sort={tool}
                  key={index}
                  style={{ backgroundColor: 'white', wordBreak: 'keep-all' }}
                />
              );
            })}
          </Row>
        </Row>
        {role && (
          <Row
            gap='28px'
            justifyContent='flex-start'
            alignItems='flex-start'
            style={{ paddingLeft: '30px' }}
          >
            <CategoryTextArea>맡은 역할 </CategoryTextArea>
            <RoleTextArea>{role}</RoleTextArea>
          </Row>
        )}
      </GridWrapper>
    </TagAreaWrapper>
  );
}

const TagAreaWrapper = styled.div`
  width: 996px;
  /* height: 122px; */
  background-color: ${theme.palette.Gray10};
  padding: 24px 30px;
  border-radius: 8px;
  display: flex;
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  row-gap: 18px;
`;

const CategoryTextArea = styled.div`
  ${theme.typo.Label1};
  color: ${theme.palette.Gray40};
  padding-top: 5px;
  padding-bottom: 5px;
`;

const DivisionLine = styled.div`
  display: block;
  width: 1px;
  height: auto;
  background-color: ${theme.palette.Gray20};
  position: relative;
  left: 50%;
  z-index: 1;
`;

const RoleTextArea = styled.div`
  ${theme.typo.Body2};
  color: ${theme.palette.Gray40};
  /* max-width: 360px; */
  flex-wrap: wrap;
  white-space: pre-wrap;
`;
