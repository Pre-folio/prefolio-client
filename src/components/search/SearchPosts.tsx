import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { SearchRequestProps, SearchStateType, usePosts } from '../../hooks/usePosts';
import { useTagArea } from '../../hooks/useTagArea';
import { Space, Text } from '../common/Wrapper';
import { FeedTagArea } from '../feed/FeedTagArea';
import { NoPost } from '../feed/NoPost';
import { Posts } from '../feed/Posts';
import { TagTabBar } from '../feed/TagTabBar';

export const SearchPosts = (props: any) => {
  const { search, setSearch, getFeed, getSearch, feed, searchType, setSearchType } = usePosts();

  const {
    getBoard,
    getNextPage,
    getBoardIsSuccess,
    getNextPageIsPossible,
    isLoading,
    type,
    act,
    sort,
    handleTagClick,
    handleTabClick,
    searchWord,
    setSearchWord,
    results,
  } = useInfiniteScroll('search');
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView && getNextPageIsPossible) {
      getNextPage();
    }
  }, [isView, getBoard]);

  const [searchParam, setSearchParam] = useState<SearchRequestProps>({
    sortBy: sort ? 'CREATED_AT' : 'LIKES',
    pageNum: 0,
    limit: 24,
    partTagList: type.join(','),
    actTagList: act.join(','),
    searchWord: '',
  });

  useEffect(() => {
    getSearch(searchParam);
  }, []);

  useEffect(() => {
    if (props.value) {
      setSearchWord(props.value);
    } else {
      setSearchWord('');
    }
  }, [props, searchWord]);

  if (searchWord === '') {
    return (
      <div>
        <Text typo="Heading3" color="Black" height={24}>
          현재 많은 프리폴리오 유저들이 읽고 있어요
        </Text>
        <Space height={60} />
        <Posts posts={feed.slice(0, 4)} />
      </div>
    );
  } else {
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
        {!isLoading && getBoardIsSuccess && getBoard!.pages && results !== 0 ? (
          getBoard?.pages?.map((page_data: any) => {
            return <Posts posts={page_data.board_page} key={page_data.current_page} ref={ref} />;
          })
        ) : (
          <NoPost
            text={
              <Text typo={'Heading3'} color={'Gray30'} height={34}>
                앗, 찾으시는 내용에 대한 결과가 없어요!
              </Text>
            }
          />
        )}
      </div>
    );
  }
};
