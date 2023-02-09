import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Viewer } from '@toast-ui/react-editor';
import styled, { CSSProperties } from 'styled-components';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import chart from '@toast-ui/editor-plugin-chart';
// import 'tui-color-picker/dist/tui-color-picker.css';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
// import uml from '@toast-ui/editor-plugin-uml';

interface TextViewerProps {
  style?: CSSProperties;
  data?: string;
}

export default function TextViewer({ style, data }: TextViewerProps) {
  return (
    <Wrapper style={style}>
      <Viewer initialValue={data} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & .toastui-editor-contents {
    color: black;
    font-size: 18px;
  }

  & .toastui-editor-ww-code-block:after {
    display: none;
  }
`;
