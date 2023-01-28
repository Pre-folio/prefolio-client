import { SearchBox } from '../../components/common/SearchBox';
import { Line, Space, Text } from '../../components/common/Wrapper';
import { theme } from '../../styles/theme';

const Search = () => {
  return (
    <div>
      <Space height={106} />
      <SearchBox />
      <Space height={60} />
      <Line width={1200} height={1} />
      <Space height={60} />
      <Text typo='Heading3' color='Black' height={24}>
        현재 많은 프리폴리오 유저들이 읽고 있어요
      </Text>
    </div>
  );
};

export default Search;
