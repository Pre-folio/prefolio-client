import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../styles/theme';
import { Tag } from '../common/Tag';
import { Column, Row } from '../common/Wrapper';

interface ProfileAreaProps {
  style?: CSSProperties;
  nickname?: string;
  grade?: number;
  field?: string;
  imageSrc?: string;
}

export default function ProfileArea({ style, imageSrc, nickname, grade, field }: ProfileAreaProps) {
  return (
    <Row gap="68px" width="100%" style={style}>
      <ProfileImageWrapper src={imageSrc} />
      <Column gap="33px" alignItems="flex-start">
        <NicknameArea>{nickname || '닉네임'}</NicknameArea>
        <Row gap="14px">
          <Tag type="activity" sort={`${grade || 2}학년`} />
          <Tag type="field" sort={field || 'dev'} />
        </Row>
      </Column>
    </Row>
  );
}

const ProfileImageWrapper = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  background-color: ${theme.palette.Gray30};
`;

const NicknameArea = styled.div`
  ${theme.typo.Heading3};
`;
