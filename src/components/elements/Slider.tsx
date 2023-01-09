import { Slider } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { shadow, theme } from '../../styles/theme';
import { Row } from './Wrapper';

const TempSlider = styled(Slider)<{ value: number }>({
  color: 'black',

  '& .MuiSlider-track': {
    border: theme.palette.Mint10,
    backgroundColor: theme.palette.Mint100,
  },
  '& .MuiSlider-thumb': {
    height: '20px',
    width: '20px',
    backgroundColor: '#fff',
    border: `2px solid ${theme.palette.Gray30}`,
    boxShadow: 'none',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      width: '26px',
      height: '26px',
      border: 'none',
      boxShadow: `${shadow.Button.Green}`,
    },
    '&:before': {
      display: 'flex',
    },
  },
  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.Gray10,
  },
  '& .MuiSlider-mark': {
    width: 1,
    height: 16,
    backgroundColor: `${theme.palette.Gray30}`,
  },
  '& .MuiSlider-mark:first-of-type': {
    width: 1,
    height: 16,
    backgroundColor: '',
  },
  '& .MuiSlider-markActive': {
    width: 1,
    height: 16,
    backgroundColor: `${theme.palette.Mint10}`,
  },
});

const TempTextArea = styled.span`
  margin-left: 8px;
  margin-bottom: 28px;
  color: rgba(255, 159, 0, 1);
`;

export function SliderBar() {
  const [temp, setTemp] = useState(0);

  const handleSliderChange = (e: any, newValue: any) => {
    setTemp(newValue);
  };

  return (
    <Row gap="24px">
      <div style={{ width: '588px' }}>
        <TempSlider
          defaultValue={20}
          value={typeof temp === 'number' ? temp : 10}
          onChange={handleSliderChange}
          aria-label="custom thumb label"
          aria-labelledby="discrete-slider"
          style={{ height: '20px' }}
          step={10}
          marks
        />
      </div>
      <ValueBox>{temp}%</ValueBox>
    </Row>
  );
}

const ValueBox = styled.div`
  padding: 4px 10px;
  width: auto;
  height: 26px;
  background-color: ${theme.palette.Navy};
  color: ${theme.palette.White};
  font-size: ${theme.typo.Label1};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
