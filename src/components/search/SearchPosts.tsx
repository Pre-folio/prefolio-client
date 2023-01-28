import { useEffect, useState } from 'react';
import { useFeed } from '../../hooks/useFeed';
import { Posts } from '../feed/Posts';

export const SearchPosts = (props: any) => {
  const {
    posts,
    setPosts,
    getFeed,
    getSearch,
    nowRead,
    searched,
    setSearched,
  } = useFeed();

  useEffect(() => {
    if (props.values) {
      getSearch(props.values);
      setSearched(true);
    } else {
      setSearched(false);
    }
    console.log('hi', props.target);
  }, [props]);

  if (!searched) {
    return (
      <div>
        <Posts posts={nowRead} />
      </div>
    );
  } else if (searched) {
    return (
      <div>
        <Posts posts={posts} />
      </div>
    );
  }
  return <div></div>;
};
