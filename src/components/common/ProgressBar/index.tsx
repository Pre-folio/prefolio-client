import { Slider } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { shadow, theme } from '../../../styles/theme';
import { Row } from '../Wrapper';

const SliderBar = styled(Slider)<{ progress: number | number[] }>((props) =>
  props.progress
    ? {
        '& .MuiSlider-root': {
          borderRadius: '4px',
        },
        '& .MuiSlider-track': {
          border: theme.palette.Mint10,
          backgroundColor: theme.palette.Mint100,
        },
        '& .css-1gv0vcd-MuiSlider-track': {
          borderTopLeftRadius: '10px! important',
          borderBottomLeftRadius: '10px! important',
          borderTopRightRadius: '0!important',
          borderBottomRightRadius: '0!important',
        },
        '& .MuiSlider-thumb': {
          height: '20px',
          width: '20px',
          backgroundColor: '#fff',
          border: `2px solid ${theme.palette.Mint100}`,

          boxShadow: 'none',
          '&:hover, &.Mui-active': {
            width: '26px',
            height: '26px',
            border: 'none',
            boxShadow: `${shadow.Button.Green}`,
          },
          '&:before': {
            backgroundColor: theme.palette.White,
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
        '& span:nth-last-of-type(12)': {
          width: 0,
        },
        '& span:nth-last-of-type(2)': {
          width: 0,
        },
        '& .MuiSlider-markActive': {
          width: 1,
          height: 16,
          backgroundColor: `${theme.palette.Mint10}`,
        },
      }
    : {
        '& .MuiSlider-thumb': {
          height: '20px',
          width: '20px',
          backgroundColor: '#fff',
          border: `2px solid ${theme.palette.Gray30}`,
          boxShadow: 'none',
          '&:hover, &.Mui-active': {
            width: '26px',
            height: '26px',
            border: 'none',
            boxShadow: `${shadow.Button.Green}`,
          },
          '&:before': {
            backgroundColor: theme.palette.White,
          },
        },
        '& .MuiSlider-rail': {
          backgroundColor: theme.palette.Gray10,
          borderRadius: '4px !important',
        },
        '& .MuiSlider-mark': {
          width: 1,
          height: 16,
          backgroundColor: `${theme.palette.Gray30}`,
        },
        '& span:nth-last-of-type(12)': {
          width: 0,
        },
        '& span:nth-last-of-type(2)': {
          width: 0,
        },
      }
);

export function ProgressBar() {
  const [value, setValue] = useState<number | number[]>(0);

  const handleSliderChange = (e: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <Row gap="24px">
      <div style={{ width: '588px' }}>
        <SliderBar
          progress={value}
          defaultValue={20}
          value={typeof value === 'number' ? value : 10}
          onChange={handleSliderChange}
          aria-label="custom thumb label"
          aria-labelledby="discrete-slider"
          style={{ height: '20px' }}
          step={10}
          marks
        />
      </div>
      <ValueBox value={value}>{value}%</ValueBox>
    </Row>
  );
}

const ValueBox = styled.div<{ value: number | number[] }>`
  padding: 4px 10px;
  width: auto;
  height: 26px;
  background-color: ${(props) => (props.value === 0 ? theme.palette.Gray30 : theme.palette.Navy)};
  color: ${theme.palette.White};
  ${theme.typo.Label1};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
