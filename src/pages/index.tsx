import { type } from 'os';
import { useState } from 'react';
import { Button } from '../components/common/Button';
import { Header } from '../components/common/Header';
import { PostButton } from '../components/common/PostButton';
import { ProfileCard } from '../components/common/ProfileCard';
import { ProgressBar } from '../components/common/ProgressBar';
import { Tag } from '../components/common/Tag';
import { TagArea } from '../components/common/TagArea';

function Home() {
  return (
    <div>
      {/* <Button type="big" color="mint" /> */}
      {/* <Tag type="field" sort={'dev'} /> */}
      {/* <ProgressBar /> */}
      {/* <ProfileCard nickname="장영준" grade={2} /> */}
      {/* <PostButton type={'scrap'} counts={4} /> */}
      {/* <Header /> */}
      {/* <TagArea /> */}
    </div>
  );
}

export default Home;
