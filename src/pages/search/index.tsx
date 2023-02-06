import { SearchBox } from '../../components/common/SearchBox';
import { Line, Space, Text } from '../../components/common/Wrapper';
import { SearchPosts } from '../../components/search/SearchPosts';
import useInput from '../../hooks/useInput';
import { useTagArea } from '../../hooks/useTagArea';

const Search = () => {
  const input = useInput('');

  return (
    <div style={{ height: '130vh' }}>
      <Space height={106} />
      <SearchBox {...input} />
      <Space height={60} />
      <Line width={1200} height={1} />
      <Space height={60} />
      <SearchPosts {...input} />
    </div>
  );
};

export default Search;
