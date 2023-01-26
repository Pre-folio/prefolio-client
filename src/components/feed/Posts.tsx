import { useRecoilState } from 'recoil';
import styled from 'styled-components';
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
}

export interface PostsProps {
  posts: SinglePostResponse[];
}

export const Posts = (props: PostsProps) => {
  const [scrapped, setScrapped] = useRecoilState(scrappedState);
  return (
    <Wrapper>
      {props.posts.map((post: any) => {
        return (
          <PostCard
            key={post.id}
            thumbnail={post.thumbnail}
            scrapped={scrapped}
            setScrapped={setScrapped}
            title={post.title}
            field={post.partTag}
            activity={post.actTag}
            postDate={post.createdAt}
            hits={post.hits}
            id={post.id}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;
