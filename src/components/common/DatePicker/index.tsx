import { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { calcRem, theme } from '../../../styles/theme';
import { Input, InputProps } from '../Input';
import { CalenderIcon } from '../../../assets/icons';

export const DatePicker = (props: InputProps) => {
  const [startDate, setStartDate] = useState();
  const [color, setColor] = useState(`${theme.palette.Gray40}`);

  useEffect(() => {
    startDate
      ? setColor(`${theme.palette.Minttext}`)
      : setColor(`${theme.palette.Gray40}`);
  }, [startDate]);

  return (
    <DatePickerStyles>
      <ReactDatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        disabledKeyboardNavigation
        dateFormat='yyyy-MM-dd'
        placeholderText='Select date'
        customInput={
          <Input
            value={startDate}
            height={46}
            width={486}
            padding={'14px 20px 14px 20px'}
            typo={'Body1'}
            rightIcon={<CalenderIcon width={26} height={26} stroke={color} />}
            {...props}
          />
        }
      />
    </DatePickerStyles>
  );
};

const DatePickerStyles = styled.div`
  .react-datepicker {
    background-color: ${theme.palette.White};

    ${theme.typo.Body1};

    border: 0;
    border-radius: 10px;

    box-shadow: 0px 0px 16px 0px rgba(14, 14, 14, 0.08);
    padding: 24px 16px 24px 16px;

    display: inline-block;
    position: relative;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    margin: 24px 16px 0px 16px;
    width: 18px;
    height: 14px;
    overflow: visible;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${theme.palette.Gray30} !important;
    border-width: 1.71px 1.71px 0 0;
    top: 6px;
  }

  .react-datepicker-popper {
    z-index: 1;
  }
  .react-datepicker-popper[data-placement^='bottom'] {
    margin-top: 14px;
    padding: 0;
  }

  .react-datepicker__month-container {
    width: 100%;
    height: 100%;
  }

  .react-datepicker__header {
    text-align: center;

    background-color: ${theme.palette.White};
    border-bottom: 1px solid ${theme.palette.Gray10};
    padding: 0 0 16px 0;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    ${theme.typo.Label1}
    color: ${theme.palette.Navy};

    height: ${calcRem(18)};
    position: relative;
    display: inline-block;

    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-datepicker__day-names {
    padding-top: 24px;
    gap: 6px !important;
    margin: 0 !important;

    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    width: 38px !important;
    height: 22px !important;
    margin: 0 !important;

    color: ${theme.palette.Mint100} !important;
  }

  .react-datepicker__month {
    padding-top: 16px !important;
    margin: 0 !important;

    text-align: center;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px !important;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 6px !important;
  }

  .react-datepicker__day {
    color: ${theme.palette.Gray50};

    display: inline-block;
    text-align: center;
    line-height: 0.75rem;

    width: 38px;
    height: 22px;

    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 4px;
    background-color: ${theme.palette.Gray10} !important;
  }
  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: normal;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 4px;
    background-color: ${theme.palette.Mint30} !important;
    color: ${theme.palette.Black}!important;
  }

  .react-datepicker__day--outside-month {
    color: ${theme.palette.Gray20}!important;
  }
`;
