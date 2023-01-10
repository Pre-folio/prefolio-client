import { SearchIcon } from '../../../assets/icons';
import { Input, InputProps } from '../Input';

export const Search = (props: InputProps) => {
  return (
    <Input
      height={58}
      padding={'20px 0px 34px 20px'}
      typo={'Body1'}
      leftIcon={<SearchIcon />}
    />
  );
};
