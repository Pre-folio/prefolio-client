import { useEffect, useState } from 'react';
import { SearchIcon } from '../../../assets/icons';
import { theme } from '../../../styles/theme';
import { Input, InputProps } from '../Input';

export const Search = (props: InputProps) => {
  const [color, setColor] = useState(`${theme.palette.Gray40}`);

  useEffect(() => {
    props.value
      ? setColor(`${theme.palette.Minttext}`)
      : setColor(`${theme.palette.Gray40}`);
  }, [props.value]);

  return <Input leftIcon={<SearchIcon fill={color} />} {...props} />;
};
