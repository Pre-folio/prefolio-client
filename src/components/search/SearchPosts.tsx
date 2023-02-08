import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  SearchRequestProps,
  SearchStateType,
  usePosts,
} from '../../hooks/usePosts';
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
    searchWord,
    setSearchWord,
  } = usePosts();
  const { type, act, sort, handleTagClick, handleTabClick } = useTagArea();
  const [searchParam, setSearchParam] = useState<SearchRequestProps>({
    sortBy: sort ? 'CREATED_AT' : 'LIKES',
    pageNum: 0,
    limit: 24,
    partTagList: type.join(','),
    actTagList: act.join(','),
    searchWord: '',
  });
  const [ref, isView] = useInView();

  useEffect(() => {
    getSearch(searchParam);
  }, [searchParam]);

  useEffect(() => {
    if (props.value) {
      setSearchWord(props.value);
      setSearchParam({
        sortBy: sort ? 'CREATED_AT' : 'LIKES',
        pageNum: 0,
        limit: 24,
        partTagList: type.join(','),
        actTagList: act.join(','),
        searchWord: props.value,
      });
    } else {
      setSearchType('wait');
    }
  }, [props, act, type, sort, searchWord]);

  switch (searchType) {
    case 'wait':
      return (
        <div>
          <Text typo='Heading3' color='Black' height={24}>
            현재 많은 프리폴리오 유저들이 읽고 있어요
          </Text>
          <Space height={60} />
          <Posts posts={feed.slice(0, 4)} ref={ref} />
        </div>
      );
    case 'result':
      return (
        <div>
          <FeedTagArea
            type={type}
            act={act}
            sort={sort}
            handleTagAreaClick={handleTagClick}
            handleTabBarClick={handleTabClick}
          />
          <Space height={60} />
          <Posts posts={search} />
        </div>
      );
    case 'none':
      return (
        <div>
          <FeedTagArea
            type={type}
            act={act}
            sort={sort}
            handleTagAreaClick={handleTagClick}
            handleTabBarClick={handleTabClick}
          />
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
