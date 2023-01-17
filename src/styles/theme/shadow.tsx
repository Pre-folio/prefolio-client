import { palette } from './palette';

/* offset-x | offset-y | blur-radius | spread-radius | color */
export const shadow = {
  Card: {
    Black: `
      0px 0px 16px 0px ${palette.Shadow.Card.Black};
    `,
  },
  Button: {
    Black: `
     0px 2px 6px 0px ${palette.Shadow.Button.Black};
    `,
    Green: `
      0px 2px 6px 0px ${palette.Shadow.Button.Green};
    `,
    Blue: `
      0px 2px 6px 0px ${palette.Shadow.Button.Blue};
    `,
    Purple: `
      0px 2px 6px 0px ${palette.Shadow.Button.Purple};
    `,
  },
};
