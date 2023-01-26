import { useRecoilValue } from 'recoil';
import postAPI, { PostResponse } from '../../apis/post';
import { userState } from '../../store/Auth/userState';
import { getCookie } from '../../utils/cookie';

const Feed = () => {
  const user = useRecoilValue(userState);
  console.log(user);

  const getFeed = async () => {
    const feed: PostResponse = await postAPI.ALL(getCookie());
    if (feed && getCookie()) {
      console.log(feed);
    }
  };

  getFeed();
  return <div>메인 피드</div>;
};

export default Feed;
