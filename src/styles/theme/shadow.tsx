import { css } from 'styled-components';
import { palette } from './palette';

export const shadow = {
  Card: {
    Black: css`
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 0px 0px 16px 0px ${palette.Shadow.Card.Black};
    `,
  },
  Button: {
    Black: css`
      box-shadow: 0px 2px 6px 0px ${palette.Shadow.Button.Black};
    `,
    Green: css`
      box-shadow: 0px 2px 6px 0px ${palette.Shadow.Button.Green};
    `,
    Blue: css`
      box-shadow: 0px 2px 6px 0px ${palette.Shadow.Button.Blue};
    `,
    Purple: css`
      box-shadow: 0px 2px 6px 0px ${palette.Shadow.Button.Purple};
    `,
  },
};
