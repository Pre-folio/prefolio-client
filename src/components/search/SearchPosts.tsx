import { useEffect, useState } from 'react';
import { SearchStateType, usePosts } from '../../hooks/usePosts';
import { useTagArea } from '../../hooks/useTagArea';
import { Space, Text } from '../common/Wrapper';
import { FeedTagArea } from '../feed/FeedTagArea';
import { NoPost } from '../feed/NoPost';
import { Posts } from '../feed/Posts';
import { TagTabBar } from '../feed/TagTabBar';

export const SearchPosts = (props: any) => {
  const {
    search,
    setSearch,
    getFeed,
    getSearch,
    feed,
    searchType,
    setSearchType,
  } = usePosts();
  const { type, act } = useTagArea();

  useEffect(() => {
    if (props.value) {
      getSearch(props.value);
    } else {
      setSearchType('wait');
    }
    console.log(search);
  }, [props]);

  switch (searchType) {
    case 'wait':
      return (
        <div>
          <Text typo='Heading3' color='Black' height={24}>
            현재 많은 프리폴리오 유저들이 읽고 있어요
          </Text>
          <Space height={60} />
          <Posts posts={feed.slice(0, 4)} />
        </div>
      );
    case 'result':
      return (
        <div>
          <FeedTagArea type={type} act={act} />
          <Space height={60} />
          <Posts posts={search} />
        </div>
      );
    case 'none':
      return (
        <div>
          <Space height={60} />
          <Posts posts={search} />
          <Space height={60} />
          <NoPost
            text={
              <Text typo={'Heading3'} color={'Gray30'} height={34}>
                앗, 찾으시는 내용에 대한 결과가 없어요!
              </Text>
            }
          />
        </div>
      );
  }
};
