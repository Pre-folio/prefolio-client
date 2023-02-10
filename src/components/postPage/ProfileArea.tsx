import { useRouter } from 'next/router';
import styled, { CSSProperties } from 'styled-components';
import { theme } from '../../styles/theme';
import { Tag } from '../common/Tag';
import { Column, Row } from '../common/Wrapper';

interface ProfileAreaProps {
  style?: CSSProperties;
  userId?: number;
  nickname?: string;
  grade?: number;
  field?: string;
  imageSrc?: string;
}

export default function ProfileArea({
  style,
  userId,
  imageSrc,
  nickname,
  grade,
  field,
}: ProfileAreaProps) {
  const router = useRouter();
  return (
    <Row gap='68px' width='100%' style={style}>
      <button
        onClick={() => {
          router.push(`/profile/${userId}`);
        }}
      >
        <ProfileImageWrapper src={imageSrc} />
      </button>
      <Column gap='33px' alignItems='flex-start'>
        <NicknameArea>{nickname || '닉네임'}</NicknameArea>
        <Row gap='14px'>
          <Tag
            type='activity'
            sort={`${grade || 2}학년`}
            style={{ boxShadow: 'none' }}
          />
          <Tag
            type='field'
            sort={field || 'dev'}
            style={{ boxShadow: 'none' }}
          />
        </Row>
      </Column>
    </Row>
  );
}

const ProfileImageWrapper = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  background-color: transparent;
`;

const NicknameArea = styled.div`
  ${theme.typo.Heading3};
`;
