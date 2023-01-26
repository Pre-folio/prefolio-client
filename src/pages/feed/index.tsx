import { useRecoilValue } from 'recoil';
import postAPI, { PostResponse } from '../../apis/post';
import { userState } from '../../store/Auth/userState';

const Feed = () => {
  const user = useRecoilValue(userState);
  console.log(user);

  const getFeed = async () => {
    const feed: PostResponse = await postAPI.ALL();
    if (feed) {
      console.log(feed);
    }
  };

  getFeed();
  return <div>메인 피드</div>;
};

export default Feed;
