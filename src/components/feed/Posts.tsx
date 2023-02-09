import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../../store/Auth/userState';
import { scrappedState } from '../../store/Posts/postsState';
import { PostCard } from '../common/PostCard';
import { Column, Row } from '../common/Wrapper';

// actTag: (3)[('society', 'intern', 'project')];
// createdAt: '2023-01-26';
// hits: 8;
// id: 53;
// partTag: (2)[('dev', 'plan')];
// thumbnail: 'https://s3.ap-northeast-2.amazonaws.com/prefolio.net/thumbnail/157dc9ea7a-2ee1-42b2-8781-b762483bfac9';
// title: '프리폴리오';

export interface SinglePostResponse {
  actTag: string[];
  createdAt: string;
  hits: number;
  id: number;
  partTag: string[];
  thumbnail: string;
  title: string;
  isScrapped: boolean;
}

export interface PostsProps {
  ref?: any;
  posts: any;
}

// eslint-disable-next-line react/display-name
export const Posts = React.forwardRef<HTMLDivElement, PostsProps>((props: PostsProps, ref) => {
  const userInfo = useRecoilValue(userState);
  return (
    <Wrapper>
      {props.posts?.map((post: any) => {
        return (
          <PostCard
            key={post.id}
            thumbnail={post.thumbnail}
            isScrapped={post.isScrapped}
            title={post.title}
            field={post.partTag}
            activity={post.actTag}
            postDate={post.createdAt}
            hits={post.hits}
            id={post.id}
            isMyPost={post.isMine}
          />
        );
      })}
      {/* 페이지 끝 감지 */}
      <div ref={ref} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media screen and (max-width: 1200px) {
    width: 100vw;
  }
`;
