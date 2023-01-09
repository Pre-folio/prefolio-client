import { Button } from '../components/elements/Button';
import { Tag } from '../components/elements/Tag';

function Home() {
  return (
    <div>
      랜딩 페이지
      <Button type="small" color="mint" content="버튼" />
      <Tag type="field" color="blue" content="개발" />
    </div>
  );
}

export default Home;
