import { useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../styles/theme';
import { Tag } from '../common/Tag';
import { Column, Row } from '../common/Wrapper';

export interface GuideLineProps {
  type: 'society' | 'project' | 'intern' | any;
  style?: CSSProperties;
}

export function GuideLine({ type, style }: GuideLineProps) {
  const [tagsList, setTagsList] = useState<string[]>([]);
  useEffect(() => {
    if (type === 'society') {
      setTagsList([
        '커리큘럼 관련 내용',
        '동아리/학회에서 배운 점',
        '동아리/학회 합격 수기',
        '구성원들의 성격이나 특성',
        '활동 중 어려웠던 점',
      ]);
    } else if (type === 'intern') {
      setTagsList([
        '회사 소개',
        '직무 소개',
        '서류, 면접 등 준비 과정',
        '합격 수기',
        '근무 에피소드',
        '인턴 노하우, 꿀팁',
        '실무 관련해서 배운 점',
      ]);
    } else if (type === 'project') {
      setTagsList([
        '진행 기간',
        '커뮤니케이션 방식',
        '활동 내용',
        '활동 중 어려웠던 점',
        '프로젝트 아웃풋',
        '프로젝트 사이트 링크 첨부',
      ]);
    }
  }, [type]);

  return (
    <Wrapper style={style}>
      <Column width="100%" alignItems="flex-start" justifyContent="flex-start" gap="24px">
        <Row gap="20px" justifyContent="flex-start">
          <BigTextArea>
            {type === 'society'
              ? '동아리/학회, 이런 내용을 작성해보세요!'
              : type === 'project'
              ? '프로젝트, 이런 내용을 작성해보세요!'
              : type === 'intern' && '인턴, 이런 내용을 작성해보세요!'}
          </BigTextArea>
          <SmallTextArea>{type === 'society' ? '어느 정도의 홍보도 가능해요 :)' : ''}</SmallTextArea>
        </Row>
        <Row width="100%" justifyContent="flex-start" gap="12px">
          {tagsList.map((tag) => {
            return (
              <Tag
                type="activity"
                sort={tag}
                key={tag}
                style={{
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  cursor: 'none',
                }}
              />
            );
          })}
        </Row>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 36px;
  width: 1098px;
  height: 134px;
  border-radius: 12px;
  background-color: ${theme.palette.Gray10};
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${theme.palette.Gray15};
`;

const BigTextArea = styled.div`
  width: auto;
  height: auto;
  color: ${theme.palette.Black};
  ${theme.typo.Heading4}
`;

const SmallTextArea = styled.div`
  width: auto;
  height: auto;
  color: ${theme.palette.Gray40};
  ${theme.typo.Body1}
`;
