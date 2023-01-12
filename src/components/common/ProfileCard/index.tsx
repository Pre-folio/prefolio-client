import styled from 'styled-components';
import { shadow, theme } from '../../../styles/theme';
import { Column, Row } from '../Wrapper';
import { Tag } from '../Tag';
import { color } from '@mui/system';

interface ProfileCardProps {
  imageSrc?: string;
  nickname?: string;
  grade?: number;
  field?: string;
  hits?: number;
  scraps?: number;
}

/**
 * 프로필 카드 컴포넌트
 * @param imageSrc 프로필 이미지
 * @param nickname 닉네임
 * @param grade 학년 - 태그로 사용
 * @param field 직군 - 태그에 사용
 * @param hits 추천수
 * @param scraps 스크랩수
 * @returns
 */
export function ProfileCard({ imageSrc, nickname, grade, field, hits, scraps }: ProfileCardProps) {
  const gradeToString: string = `${grade}학년`;
  return (
    <Container>
      <ImageWrapper alt="프로필 이미지" src={imageSrc ? imageSrc : ''} />
      <NicknameWrapper>{nickname || '닉네임'}</NicknameWrapper>
      <Row marginTop="30px" gap="12px">
        <Tag
          type="activity"
          sort={gradeToString || '2학년'}
          style={{ backgroundColor: theme.palette.Gray10, color: theme.palette.Gray50 }}
        />
        <Tag type="field" sort={field || 'dev'} />
      </Row>
      <Column marginTop="30px" gap="12px" style={{ fontSize: `${theme.typo.Body1}`, color: `${theme.palette.Gray50}` }}>
        <Row justifyContent="space-between" style={{ width: '100%' }}>
          <span>추천수</span>
          <span>{hits || 4}</span>
        </Row>
        <Row justifyContent="space-between" style={{ width: '100%' }}>
          <span>스크랩수</span>
          <span>{scraps || 4}</span>
        </Row>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  width: 282px;
  height: auto;
  border-radius: 20px;
  padding: 96px 75px;
  background-color: ${theme.palette.White};
  box-shadow: ${shadow.Card.Black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & span {
    ${theme.typo.Body1};
  }
`;

interface ImageWrapperProps {
  src: string;
}
const ImageWrapper = styled.img<ImageWrapperProps>`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${(props) => (props.src ? '' : theme.palette.Gray30)};
`;

const NicknameWrapper = styled.div`
  margin-top: 30px;
  ${theme.typo.Heading3};
  color: ${theme.palette.Black};
`;
