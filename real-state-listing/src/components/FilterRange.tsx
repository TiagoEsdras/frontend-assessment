import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ThemeProvider } from '@mui/material';
import muiTheme from '../theme/Theme';

interface FilterRangeProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  title: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<number[]>>
}

function valuetext(value: number) {
  return `${value}`;
}

const FilterRange: React.FC<FilterRangeProps> = ({
  min,
  max,
  currentMin,
  currentMax,
  title,
  setSelectedValue
}) => {
  console.log(currentMax)
  const [value, setValue] = useState<number[]>([]);

  const handleChange = (event: Event, currentRange: number | number[]) => {
    setSelectedValue(currentRange as number[])
    setValue(currentRange as number[]);
  };

  useEffect(() => {
    setValue([currentMin, currentMax])
  }, [currentMin, currentMax]);

  return (
    <div className='w-full lg:max-w-[296px] cursor-pointer relative flex justify-center'>
      <ThemeProvider theme={muiTheme}>
        <Box sx={{ width: 296, height: 64 }}>
          <div className='flex justify-between items-center'>
            <div className='text-[15px] font-medium leading-tight text-dark-blue'>
              <h4>{title}</h4>
            </div>
            <div className='text-[13px] text-dark-gray'>
              <span>Min: ${value[0]}</span> - <span>Max: ${value[1]}</span>
            </div>
          </div>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            step={100000}
            marks
            disableSwap
            min={min}
            max={max}
          />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default FilterRange;
