import { useEffect, useState } from 'react';
import { SearchIcon } from '../../../assets/icons';
import { theme } from '../../../styles/theme';
import { Input, InputProps } from '../Input';

export const SearchBox = (props: InputProps) => {
  const [color, setColor] = useState(`${theme.palette.Gray40}`);

  useEffect(() => {
    props.value
      ? setColor(`${theme.palette.Minttext}`)
      : setColor(`${theme.palette.Gray40}`);
  }, [props.value]);

  return (
    <Input
      onChange={props.onChange}
      placeholder='내용을 입력하세요'
      leftIcon={<SearchIcon fill={color} />}
      {...props}
    />
  );
};
