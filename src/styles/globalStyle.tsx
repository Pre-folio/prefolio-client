import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`


  html,
  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif, Gotham;
   
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
  }
  
  #root {
    margin: 0 auto;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }
  
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
    cursor: pointer;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }

  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }

`;

export default GlobalStyle;
