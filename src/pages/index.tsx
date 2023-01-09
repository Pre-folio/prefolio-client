import { Button } from '../components/elements/Button';
import { Tag } from '../components/elements/Tag';
import { Filter } from '../components/elements/Filter';

function Home() {
  return (
    <div>
      랜딩 페이지
      {/* <Button type="small" content="버튼" />
      <Tag type="field" color="blue" content="개발" /> */}
      <Filter type="dev" />
    </div>
  );
}

export default Home;
