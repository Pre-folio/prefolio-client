import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`


  html,
  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
   
    box-sizing: border-box;
  }
  
  #root {
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
  }
  
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }

`;

export default GlobalStyle;
