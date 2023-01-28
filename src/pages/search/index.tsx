import { SearchBox } from '../../components/common/SearchBox';
import { Line, Space } from '../../components/common/Wrapper';

const Search = () => {
  return (
    <div>
      <Space height={106} />
      <SearchBox />
      <Space height={60} />
      <Line width={1200} height={1} />
      <Space height={60} />
    </div>
  );
};

export default Search;
